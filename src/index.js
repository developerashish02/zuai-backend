const app = require("./app");
const config = require("./config/envConfig.js");

console.log(config);

app.listen(config.port, () => {
  console.log(
    `Server is running on port ${config.port} in ${config.nodeEnv} mode`
  );
});
