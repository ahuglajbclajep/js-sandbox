const https = require('https');

function getURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      if (res.statusCode === 200) {
        res.setEncoding('utf8');
        res.on('data', chunk => resolve(chunk));
      } else {
        reject(new Error(res.statusCode));
      }
    }).on('error', err => reject(err.message));
  });
}

getURL('https://example.com')
  .then(data => console.log(data))
  .catch(err => console.log(err));
