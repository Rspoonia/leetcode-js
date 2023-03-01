var sumOfUnique = function (nums) {
  let obj = {},
    sum = 0;
  nums.forEach((item) => {
    if (obj[item]) obj[item]++;
    else obj[item] = 1;
  });
  Object.keys(obj).forEach((num) => {
    if (obj[num] === 1) sum = sum + Number(num);
  });
  return sum;
};

const arr = [1, 2, 3, 2];

const res = sumOfUnique(arr);
console.log(res);
