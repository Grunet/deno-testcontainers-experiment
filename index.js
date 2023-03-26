const {
    GenericContainer
  } =require("testcontainers");
  
(async function () {
    const container = new GenericContainer("alpine");
    const startedContainer = await container.start();
    const stoppedContainer = await startedContainer.stop();
})();

