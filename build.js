const esbuild = require("esbuild");
const fs = require("fs-extra");

fs.copy("assets", "dist/assets");
fs.readdir("public").then((files) =>
  files.forEach((file) => fs.copy(`public/${file}`, `dist/${file}`))
);

esbuild
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    logLevel: "error",
    outdir: "dist/js",
  })
  .catch(() => process.exit(1));