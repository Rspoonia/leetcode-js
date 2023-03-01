var twoSum = function(nums, target) {
    if(nums.length < 2) return 0
    let v1,v2 
    for(let i = 0; i < nums.length - 1; i++) {
        v1 = nums[i]
        v2 = target - v1
        if(nums.indexOf(v2, i + 1) !== -1) return [i, nums.indexOf(v2, i + 1)]
    }
};

const nums = [2,7,11,15], target = 9
console.log(twoSum(nums, target)) // [0, 1]