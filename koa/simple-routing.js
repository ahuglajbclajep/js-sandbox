const Koa = require("koa");
const app = new Koa();

function routing(path, fn) {
  return async (ctx, next) => {
    if (path == ctx.path) {
      fn(ctx);
    } else {
      next();
    }
  };
}

app.use(
  routing("/koa", ctx => {
    ctx.body = "Hello, koa";
  })
);

app.use(
  routing("/world", ctx => {
    ctx.body = "Hello, world";
  })
);

app.listen(3000);
