var combinationSum2 = function (candidates, target) {
  if (!candidates.length) return null;
  let res = [];
  candidates.sort();
  const permute = (arr = [], sum = 0, idx = 0) => {
    if (sum === target) res.push(arr);
    if (sum < target) {
      for (let i = idx; i < candidates.length; i++) {
        if (i > idx && candidates[i] === candidates[i - 1]) continue;
        permute([...arr, candidates[i]], sum + candidates[i], i+1);
      }
    }
  };
  permute([], 0, 0);
  return res;
};

const candidates = [10, 1, 2, 7, 6, 1, 5, 8],
  target = 7;
console.log(combinationSum2(candidates, target));
