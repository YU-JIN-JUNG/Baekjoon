const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', async function () {
  // 답안 작성
  let arr = input[0].split(' ');
  let answer = esm(arr[0] * 1, arr[1] * 1, arr[2] * 1);
  console.log(answer);
  process.exit();
});

let esm = function (e, s, m) {
  let x = 0;
  while (1) {
    if (x % 15 == e - 1 && x % 28 == s - 1 && x % 19 == m - 1) break;
    x++;
  }
  return ++x;
};
