function countTriplets(arr, r) {
    arr = arr.sort((a,b) => a-b)
    let sum = 0
    for(let i = 0; i< arr.length - 2; i++) {
        let left = i+1, right = arr.length-1
        while(left<right){ 
            if(arr[i] + arr[left] + arr[right] > r) {
                sum+=1
                left++
                right--
            } else left++
        }
    }
    return sum
}

let arr  = [1, 2, 2, 4]
console.log(countTriplets(arr, 2))