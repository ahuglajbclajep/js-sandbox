const GitHubStrategy = require('passport-github').Strategy;
module.exports = { initialize };

function initialize(passport) {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/login/callback'
  },
    (accessToken, refreshToken, profile, cb) => cb(null, profile)
  ));
}
