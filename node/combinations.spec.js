const _ = require('./combinations');

test.each([
  [[1, 2, 3], 1, [[1], [2], [3]]],
  [[1, 2, 3], 2, [[1, 2], [1, 3], [2, 3]]],
  [[1, 2, 3], 3, [[1, 2, 3]]],
  [[1, 2, 3], 4, []],
  [[1, 2, 3], 0, []],
  [[1, 2, 3], -1, []],
  [[], 0, []]
])('k_combinations', (n, k, expected) => {
  expect(_.k_combinations(n, k)).toEqual(expected);
});

test.each([
  [[1, 2, 3], [[1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]],
  [[1], [[1]]]
])('combinations', (n, expected) => {
  expect(_.combinations(n)).toEqual(expected);
});
