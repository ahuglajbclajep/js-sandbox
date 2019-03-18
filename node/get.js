const https = require("https");

function get(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        if (res.statusCode === 200) {
          res.setEncoding("utf8");
          res.on("data", chunk => resolve(chunk));
        } else {
          reject(res.statusCode);
        }
      })
      .on("error", err => reject(err.message));
  });
}

get("https://example.com")
  .then(console.log)
  .catch(console.log);
