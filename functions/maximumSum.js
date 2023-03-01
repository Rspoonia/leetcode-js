const maximumSum = (arr, m) => {
    const newArr = []
    let sum = 0
    arr.forEach((num, i) => {
       if(i===0) newArr.push(num%m)
       else newArr.push((num+newArr[i-1])%m)
    })

    console.log(newArr)
    newArr.forEach(num => {
        if(num%m > sum) sum = num%m
    })
    return sum
} 
const arr = [1, 2, 3,4, 5,6, 7, -8,2,12,11]
let m = 5
console.log(maximumSum(arr, m))