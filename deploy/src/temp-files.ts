import { writeFileSync } from 'fs';
import {v4 as uuidv4} from 'uuid';
import tempDirectory from 'temp-dir';
import path from 'path';


export const writeTempFile = (extension: string, contents: Buffer) => {
  const file = tempfile(extension);
  writeFileSync(file, contents);
  return file;
}

export default function tempfile(extension = '') {
	return path.join(tempDirectory, uuidv4() + extension);
}
