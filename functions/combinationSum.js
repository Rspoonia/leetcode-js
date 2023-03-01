var combinationSum = function(candidates, target) {
    if(!candidates.length) return []
    const res = new Set()
    const permute = (arr=[], sum=0, idx = 0) => {
        if(sum > target) return
        if(sum === target) {
            arr = arr.sort((a,b) => a-b)
            res[arr] = arr
        }
        for(let i = 0; i < candidates.length; i++) {
            permute([...arr, candidates[i]], sum+candidates[i], i)
        }
    }
    permute()
    const arr = []
    for(let item in res) {
        arr.push(res[item])
    }
    return arr
};

const candidates = [2,3,5,6,7], target = 7
console.log(combinationSum(candidates, target))

//loveu2597 chintha1490