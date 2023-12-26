const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let s = 0;
let result = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', async function () {
  // 답안 작성
  const n = input.shift() * 1;
  input.reduce((acc, cur) => {
    let line = cur.split(' ');
    bit_set(line[0], Math.pow(2, line[1] * 1 - 1));
  }, '');
  console.log(result.join('\n'));
  process.exit();
});

let bit_set = function (cmd, n) {
  switch (cmd) {
    case 'add':
      s = s | n;
      break;
    case 'remove':
      if ((n & s) === n) s -= n;
      break;
    case 'check':
      if ((n & s) === n) result.push(1);
      else result.push(0);
      break;
    case 'toggle':
      if ((n & s) === n) s -= n;
      else s += n;
      break;
    case 'all':
      s = 0b11111111111111111111;
      break;
    case 'empty':
      s = 0;
      break;
  }
};
