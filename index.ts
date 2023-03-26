import {
    TestContainer,
    StartedTestContainer,
    StoppedTestContainer,
    GenericContainer
  } from "npm:testcontainers";
  
  const container: TestContainer = new GenericContainer("alpine");
  const startedContainer: StartedTestContainer = await container.start();
  const stoppedContainer: StoppedTestContainer = await startedContainer.stop();

console.log("testing")