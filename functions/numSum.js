function solution(n) {
  const sum = n + "".split("").reduce((acc, curr) => acc + parseInt(curr), 0);
  console.log(sum);
}

solution(29);
