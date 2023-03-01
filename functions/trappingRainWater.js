const traping = (height) => {
    let left = 0, right = height.length-1, water = 0, hilevel = 0
    while(left <=right) {
        let lowlevel = height[height[left] < height[right] ? left++ : right--]
        hilevel = Math.max(lowlevel, hilevel)
        water+=hilevel-lowlevel
    }
    return water
}
const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(traping(height))