const area = (height) => {
    if(height.length < 2) return 0
    let left = 0, right= height.length - 1, res = 0
    while(left < right) {
        res = Math.max(res, Math.min(height[right], height[left]) * (right - left))
        if(right > left) left++
        else right--
    }   
    return res
}

const arr = [1,1, 2]
console.log(area(arr))