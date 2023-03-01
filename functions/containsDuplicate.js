var containsDuplicate = function(nums) {
    for(let i = 0; i< nums.length; i++) {
         if(nums.lastIndexOf(nums[i]) > i) return true
    }
    return false
};

const nums = [1,2,3,1]
console.log(containsDuplicate(nums))