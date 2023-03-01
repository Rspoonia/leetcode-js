var searchInsert = function(nums, target) {
    let start = 0, end = nums.length
    while(start < end) {
        let mid  = (start + end) >>> 1 
        if(nums[mid] < target) start = mid+1
        else end  = mid
    }
    return start
};

console.log(searchInsert([1,3,5,6],5))
console.log(searchInsert([1,3,5,6],2))
console.log(searchInsert([1,3,5,6],7))