import { spawnSync } from "child_process";
import JSZip from "jszip";

export const performPackage = async (filePath: string, esbuildPath: string): Promise<Buffer> => {
  const esbuildDefaultArgs = [
    "--bundle",
    "--target=node14",
    "--platform=node",
    "--external:aws-sdk",
    "--external:/opt/*", // Used when referencing dependencies from the Lambda layers
  ];
  const esbuildArgs = [...esbuildDefaultArgs, filePath];

  const compilationResult = spawnSync(
    process.env.ESBUILD_PATH || esbuildPath,
    esbuildArgs,
    {},
  );
  if (compilationResult.error) {
    throw compilationResult.error;
  }

  if (compilationResult.stderr && compilationResult.stderr.toString()) {
    throw new Error("Compilation failed: " + compilationResult.stderr.toString());
  }

  const zip = new JSZip();

  const contents = compilationResult.stdout.toString();

  zip.file("index.js", contents, { date: new Date(1950, 1, 1, 0, 0, 0, 0) }); //this is needed to make the packaging process deterministic
  return await zip.generateAsync({ type: "nodebuffer" });

}