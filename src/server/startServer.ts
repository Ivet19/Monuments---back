import chalk from "chalk";
import app from "./app.js";

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log("__________________________________________");
    console.log(
      `✅${chalk.bold.bgMagentaBright("Server running at")} ${chalk.green(
        `http://localhost:${port}`,
      )}✅`,
    );
    console.log("____________________________________________");
  });
};

export default startServer;
