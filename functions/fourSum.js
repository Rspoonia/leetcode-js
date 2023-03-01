const fourSum = (nums, target) => {
  if (nums.length < 4) return [];
  const arr = [];
  nums = nums.sort((a, b) => a - b);
  const arrLength = nums.length;
  for (let i = 0; i < arrLength - 3; i++) {
    if (nums[i] === nums[i - 1]) continue;
    for (let j = i+1; j < arrLength - 2; j++) {
      if (nums[j] === nums[j - 1] && j !== i + 1 ) continue;
      let left = j + 1;
      let right = arrLength - 1;
      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          arr.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[right] === nums[right - 1]) right--;
          while (left < right && nums[left] === nums[left + 1]) left++;
          left++
          right--
        } else if (sum > target) right--;
        else left++;
      }
    }
  }
  return arr;
};

let nums = [1, 0, -1, 0, -2, 2];
let target = 0;
// console.log(fourSum(nums, target)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

(nums = [2, 2, 2, 2, 2]), (target = 8);
console.log(fourSum(nums, target)); // [[2,2,2,2]]
