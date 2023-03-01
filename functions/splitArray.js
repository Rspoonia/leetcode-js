var splitArray = function (nums, k) {
  const len = nums.length;
  let startPos = len - k;
  return nums
    .reverse()
    .sort((a, b) => a - b)
    .slice(startPos - len)
    .reduce((total, value) => (total += value));
};
const nums = [1, 4, 4],
  k = 3;
console.log(splitArray(nums, k));
