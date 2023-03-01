var thirdMax = function(nums) {
    let arr = [...new Set(nums)].sort((a, b) => b-a)
    if(arr.length > 2) return arr[2] 
    return arr[0]
};

console.log(thirdMax([1,2]))