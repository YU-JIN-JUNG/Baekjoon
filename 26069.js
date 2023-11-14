let input = [
  12,
  `bnb2011 chansol`,
  `chansol chogahui05`,
  `chogahui05 jthis`,
  `jthis ChongChong`,
  `jthis jyheo98`,
  `jyheo98 lms0806`,
  `lms0806 pichulia`,
  `pichulia pjshwa`,
  `pjshwa r4pidstart`,
  `r4pidstart swoon`,
  `swoon tony9402`,
  `tony9402 bnb2011`,
];
let N = parseInt(input[0]);
let arr = [];
for (let i = 1; i <= N; i++) {
  let person = input[i].split(' ');

  if (person[0] === 'ChongChong') {
    arr.push('ChongChong');
    arr.push(person[1]);
  } else if (person[1] === 'ChongChong') {
    arr.push('ChongChong');
    arr.push(person[0]);
  }

  if (arr.includes(person[0])) {
    arr.push(person[1]);
  } else if (arr.includes(person[1])) {
    arr.push(person[0]);
  }
}
let answer = new Set(arr);
console.log(answer.size);
