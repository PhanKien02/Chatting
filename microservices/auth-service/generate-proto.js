// generate-proto.js
const glob = require("glob");
const path = require("path");
const { execSync } = require("child_process");

const files = glob.sync("./src/proto/**/*.proto");

files.forEach((file) => {
        const dir = path.dirname(file);
        console.log(`✨ Generating for: ${file} → ${dir}`);
        execSync(`yarn proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=${dir} ${file}`, {
                stdio: "inherit",
        });
});
