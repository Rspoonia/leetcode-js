var removeDuplicates = function(nums) {
    let arr = 0
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] !== nums[i+1]) {
            nums[arr++] = nums[i]
        }
    }
     return arr
 };
 console.log(removeDuplicates([1,1,2]))