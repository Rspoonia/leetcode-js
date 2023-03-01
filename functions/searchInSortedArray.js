var search = function(nums, target) { 
    let start = 0, end = nums.length -1 
    while(start <= end) {
        let mid=Math.floor((start + end)/2);
        if(nums[mid] === target) return mid
        if(nums[start] <= nums[mid]) {
            if(target >= nums[start] && target < nums[mid]) end = mid - 1
            else start = mid + 1
        }else {
            if(target <= nums[end] && target > nums[mid]) start = mid+1
            else end = mid -1
        }
    }
    return -1
};

const nums = [4,5,6,7,0,1,2], target = 0
// 0

console.log(search(nums, target))