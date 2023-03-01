var merge = function(nums1, m, nums2, n) {
    nums2.forEach((num, index) => {
        nums1[m+index] = num
    })
    nums1.sort((a,b)=> a-b);
    console.log(nums1)
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

merge(nums1, m, nums2, n)