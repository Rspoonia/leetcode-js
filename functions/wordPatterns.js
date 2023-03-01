const wordPattern = (pattern, s) => {
  let strArr = s.split(" ");
  let strHash = {},
    patternHash = {};
  if (strArr.length !== pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (
      (pattern[i] in patternHash && patternHash[pattern[i]] !== strArr[i]) ||
      (strArr[i] in strHash && strHash[strArr[i]] !== pattern[i])
    ) {
      return false;
    } else {
      patternHash[pattern[i]] = strArr[i];
      strHash[strArr[i]] = pattern[i];
    }
  }
  return true;
};
const pattern = "abba",
  s = "dog cat cat dog";
console.log(wordPattern(pattern, s));
