# deno-testcontainers-experiment

## First Error

error: Uncaught Error: Not implemented: See https://github.com/denoland/deno_std/issues/1436
    at notImplemented (ext:deno_node/_utils.ts:7:11)
    at Object.userInfo (ext:deno_node/os.ts:211:5)
    at RootlessUnixSocketStrategy.getSocketPathFromRunDir (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:51:68)
    at RootlessUnixSocketStrategy.<anonymous> (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:32:99)
    at Generator.next (<anonymous>)
    at file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:8:71
    at new Promise (<anonymous>)
    at __awaiter (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:4:12)
    at RootlessUnixSocketStrategy.init (file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/rootless-unix-socket-strategy.js:27:16)
    at file:///deno/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/docker-client.js:38:28

Solved by monkeypatching

## Second Error

error: Uncaught Error: No Docker client strategy found
    at file:///home/gitpod/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/docker-client.js:58:11
    at Generator.next (<anonymous>)
    at fulfilled (file:///home/gitpod/.cache/deno/npm/registry.npmjs.org/testcontainers/9.3.0/dist/src/docker/docker-client.js:5:58)

Even though Gitpod comes with a Docker runtime