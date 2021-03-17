import Router from "koa-router";

import { healthCheck } from "../controllers/healthCheck.controller";

const router = new Router();

router.get(`/api/v1/ping`, healthCheck);

export default router;
