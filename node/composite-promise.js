/* Promiseの合成の例 */

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms, ms));
const sleepLog = ms => sleep(ms).then(ms => { console.log(`sleep ${ms}ms`); return ms; });
const sleepLog1s = () => sleepLog(1000);  // sleepLog(1000); だと定義した時点で走ってしまう

// Promiseの配列を直列に合成したPromiseを返す関数
const compositePromise = (ps, x) => ps.reduce((p, nextp) => p.then(nextp), Promise.resolve(x));

async function compute(description, promise) {
  console.log(description);
  const result = await promise;
  console.log(`result: ${result}\n`);
}

async function main() {

  /* 直列な合成 */
  // 以下3つは同じように振る舞う
  await compute('use Promise.then',
    sleepLog(1000).then(sleepLog)
  );
  await compute('call compositePromise with initial value',
    compositePromise([sleepLog, sleepLog], 1000)
  );
  await compute('call cpmpositePromise',
    compositePromise([sleepLog1s, sleepLog1s])
  );

  // 非同期でない関数が混じっていても使える
  const double = x => x * 2
  await compute('call composePromise with an array containing sync functions',
    compositePromise([sleepLog1s, double, sleepLog])
  );

  /* 並列な合成 */
  // 数や関数などPromiseでないものはそのまま出てくる
  const sleep1s = new Promise(resolve => setTimeout(resolve, 1000, 'foo'));
  await compute('use Promise.all',
    Promise.all([Promise.resolve(3), 42, sleepLog1s, sleep1s])
  );
}

main();
