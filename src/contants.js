import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// these constants not available in ecma modules
// so we have to declare them with below code
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rootDir = join(__dirname, "..");

// load localhost ssl certificates
export const localKey = readFileSync(rootDir + "/localhost-private.pem");
export const localCert = readFileSync(rootDir + "/localhost-cert.pem");
