// 1부터 50의 자연수 중 짝수를 구하는 함수

function calculateEvenNum () {
  const num = []; // 빈 배열을 만들어줬고
  for (let i=1; i < 51; i++) {
    if (i % 2 === 0) {
      num.push(i);
    }
  }
  return num;
}

console.log(calculateEvenNum());