import Koa, { ParameterizedContext, DefaultState, DefaultContext } from "koa";
import dotenv from "dotenv";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import healthCheckRoute from "./routes/healthCheck.routes";

const app = new Koa();

dotenv.config();

const PORT = process.env.PORT;

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(healthCheckRoute.routes()).use(healthCheckRoute.allowedMethods());

const server = app.listen(PORT).on("listening", () => {
  console.log(`🚀 Server listening on port: ${PORT}`);
});
export default server;
