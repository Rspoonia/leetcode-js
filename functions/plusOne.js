var plusOne = function(digits) { 
    for(let i = digits.length -1; i >=0; i--) {
       digits[i]++
       if(digits[i] > 9) digits[i] = 0
       else return digits
    }
    return [1, ...digits]
};

const digits =[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]

console.log(plusOne([9,9]))
