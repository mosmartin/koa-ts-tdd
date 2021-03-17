import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";

import healthCheckRoute from "./routes/healthCheck.routes";

const app = new Koa();

app.use(bodyParser());
app.use(
  cors({
    origin: "*",
  })
);
app.use(logger());

app.use(healthCheckRoute.routes()).use(healthCheckRoute.allowedMethods());

export { app };
