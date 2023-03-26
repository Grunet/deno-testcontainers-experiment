# deno-testcontainers-experiment

error: Uncaught Error: Not implemented: See https://github.com/denoland/deno_std/issues/1436
    at notImplemented (internal:deno_node/polyfills/_utils.ts:7:11)
    at Object.userInfo (internal:deno_node/polyfills/os.ts:211:5)
    at RootlessUnixSocketStrategy.getSocketPathFromRunDir (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:51:68)
    at RootlessUnixSocketStrategy.<anonymous> (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:32:99)
    at Generator.next (<anonymous>)
    at file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:8:71
    at new Promise (<anonymous>)
    at __awaiter (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:4:12)
    at RootlessUnixSocketStrategy.init (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:27:16)
    at file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/docker-client.js:38:28