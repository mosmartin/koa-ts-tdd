import { DefaultContext, DefaultState, Next, ParameterizedContext } from "koa";

export const healthCheck = async (
  ctx: ParameterizedContext<DefaultState, DefaultContext>,
  next: Next
) => {
  ctx.body = {
    status: "success",
    data: "pong",
  };
};
