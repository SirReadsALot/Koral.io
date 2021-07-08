const esbuild = require("esbuild");
const fs = require("fs-extra");
const { createServer, request } = require("http");

fs.copy("assets", "dist/assets");
fs.readdir("public").then((files) =>
  files.forEach((file) => fs.copy(`public/${file}`, `dist/${file}`))
);

fs.watch("public", (_, name) => {
  fs.copy(`public/${name}`, `dist/${name}`);
  clients.forEach((res) => res.write("data: update\n\n"));
  clients.length = 0;
});

const clients = [];

esbuild
  .build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    logLevel: "error",
    outdir: "dist/js",
    banner: {
      js: ' (() => new EventSource("/esbuild").onmessage = () => location.reload())();',
    },
    watch: {
      onRebuild(error, _) {
        if (error) console.log(error);
        clients.forEach((res) => res.write("data: update\n\n"));
        clients.length = 0;
      },
    },
  })
  .catch(() => process.exit(1));

esbuild.serve({ servedir: "dist" }, {}).then((server) => {
  createServer((req, res) => {
    const { host, port } = server;
    if (req.url === "/esbuild")
      return clients.push(
        res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          Connection: "keep-alive",
        })
      );
    req.pipe(
      request({ hostname: host, port, path: req.url }, (prxRes) => {
        prxRes.pipe(res, { end: true });
      }),
      { end: true }
    );
  })
  .listen(3000)
  console.log("Starting server on port 3000...")
});
