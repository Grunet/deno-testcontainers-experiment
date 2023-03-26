// deno run --allow-all index.ts

import {
    TestContainer,
    StartedTestContainer,
    StoppedTestContainer,
    GenericContainer
  } from "npm:testcontainers";

  import os from "node:os";

  os.userInfo = function() {
    return {
      uid: 1 // TODO - what should this actually be? https://nodejs.org/api/os.html#osuserinfooptions
    }
  };
  
  const container: TestContainer = new GenericContainer("alpine");
  const startedContainer: StartedTestContainer = await container.start();
  const stoppedContainer: StoppedTestContainer = await startedContainer.stop();

console.log("testing")