var permute = function(nums) {
    const len = nums.length
    if(len < 2) return nums
    const res = []
    const arr = [...nums]
    for(let i = 0; i<nums.length; i++) {
        nums[(i)%nums.length] = arr[i]
    }
    return nums
};

const nums = [1,2,3]
console.log(permute(nums))