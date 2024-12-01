function fibonacciGeneration(n) {
  

  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      let fibNum = result[i - 1] + result[i - 2];
      result.push(fibNum);
    }
  }
  return result;
}

console.log(fibonacciGeneration(13));