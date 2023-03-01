var addStrings = function (num1, num2) {
  num1 = num1.split("");
  num2 = num2.split("");
  let res = [],
    carry = 0;
  while (num1.length || num2.length) {
    let [c1 = "0", c2 = "0"] = [num1.pop(), num2.pop()];
    let added = carry + Number(c1) + Number(c2);
    carry = 0;
    if (added >= 10) {
      carry = 1;
      added = (added % 10).toString();
    }
    res.unshift(added);
  }
  if (carry > 0) res.unshift(carry);
  return res.join("");
};
const num1 = "11",
  num2 = "123";
console.log(addStrings(num1, num2));
