import dotenv from "dotenv";
import { ParameterizedContext, DefaultState, DefaultContext } from "koa";
import { app } from "./app";

dotenv.config();

const PORT = process.env.PORT;

const startServer = async () => {
  app
    .listen(PORT)
    .on("listening", () => {
      console.log(`🚀 Server listening on port: ${PORT}`);
    })
    .on(
      "error",
      (err: Error, ctx: ParameterizedContext<DefaultState, DefaultContext>) => {
        console.error(`🔥 server error: ${err} \n ${ctx}`);
      }
    );
};

startServer();
