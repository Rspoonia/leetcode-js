const flatMap = (arr) => {
    if(!Array.isArray(arr)) return arr
    else {
       return arr.reduce((acc, curr) => {
            return acc.concat(flatMap(curr))
        }, [])
    }
}

const arr = [1, 2, [3, 4, [5, , [[[[7]]]], [[[[[[8, 9]]]]]]]]]
console.log(flatMap(arr))