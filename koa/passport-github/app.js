const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const session = require("koa-session");
const passport = require("koa-passport");
const auth = require("./auth");
const route = require("koa-route");
const serve = require("koa-static");
const app = new Koa();

app.use(bodyParser());

app.keys = ["secret"];
app.use(session({}, app));

app.use(passport.initialize());
app.use(passport.session());
auth.initialize(passport);

app.use(
  route.get("/app", ctx => {
    ctx.body = ctx.isAuthenticated()
      ? `ようこそ ${ctx.state.user.displayName} さん`
      : "ログインが必要です";
  })
);

app.use(route.get("/login", passport.authenticate("github")));

app.use(
  route.get(
    "/login/callback",
    passport.authenticate("github", { successRedirect: "/" })
  )
);

app.use(
  route.get("/logout", ctx => {
    ctx.logout();
    ctx.redirect("/");
  })
);

app.use(serve("public"));

app.listen(3000);
