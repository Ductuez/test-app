function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);

  const totalMin = arr.slice(0, -1).reduce((acc, curr) => acc + curr, 0);

  const totalMax = arr.slice(1).reduce((acc, curr) => acc + curr, 0);

  console.log({
    totalMin,
    totalMax,
  });
}

const input = "4 4 4 4";
const arr = input.split(" ").map((number) => Number(number));

miniMaxSum(arr);
