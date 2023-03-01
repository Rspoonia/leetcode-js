var addTwoNumbers = function(l1, l2) {
    if(l1.length !== l2.length) return false
    let sum = []
    let carry = 0
    for(let i = 0; i < l1.length; i++) {
       const temp = l1[i] + l2[i]
       if(temp + carry > 9) {
        sum.push(temp-10)
        carry = 1
       } else {
        sum.push(temp + carry)
        carry = 0
       }
    }
    return sum
};
const l1 = [2,4,3], l2 = [5,6,4]

addTwoNumbers(l1, l2)