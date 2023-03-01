var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i< nums.length; i++) {
        if (i - map.get(nums[i]) <= k) return true
        map.set(nums[i], i)
    }
    return false
};

console.log(containsNearbyDuplicate([1,2,3,1],3)) // true
console.log(containsNearbyDuplicate([1,0,1,1], 1)) // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)) // false