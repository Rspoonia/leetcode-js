var rotate = function (nums, k) {
  const arr = []
  for(let i = 0; i<nums.length; i++) {
    arr[(i+k)%nums.length] = nums[i]
  }
  for(let i = 0; i<nums.length; i++) {
    nums[i] = arr[i]
  }
  return nums
};

let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
console.log(rotate(nums, k));
nums =[-1,-100,3,99], k = 2
console.log(rotate(nums, k));