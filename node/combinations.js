// see https://gist.github.com/axelpale/3118596

function kCombinations(set, k) {
  if (k <= 0 || set.length < k) return [];
  if (k === set.length) return [set];
  if (k === 1) return set.map((e) => [e]);

  const combs = [];
  for (let i = 0; i < set.length - k + 1; i++) {
    const head = set.slice(i, i + 1);
    k_combinations(set.slice(i + 1), k - 1).forEach((e) => {
      combs.push(head.concat(e));
    });
  }
  return combs;
}

function combinations(set) {
  const combs = [];
  for (let k = 1; k <= set.length; k++) {
    kCombinations(set, k).forEach((e) => {
      combs.push(e);
    });
  }
  return combs;
}

module.exports = { kCombinations, combinations };
