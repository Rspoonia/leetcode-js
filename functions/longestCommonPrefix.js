var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];
  let str = "";
  const firstArr = strs[0].split("");
  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) !== firstArr[i]) {
        return str;
      }
    }
    str += firstArr[i];
  }
  return str;
};

const strs = ["flower", "flow", "flight"];

console.log(longestCommonPrefix(strs));
