export declare const deploy: (filepath: string, options: DeployOptions) => void;
export declare const packageProgram: (filepath: string, options: PackageOptions) => void;
interface DeployOptions {
}
interface PackageOptions {
    executionRole: string | {
        ref: string;
    };
    templateFilePath: string;
}
export {};
