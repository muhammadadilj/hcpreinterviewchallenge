export const arraySum = (a) => {
  // TODO: fill in your solution

  let sum = 0;

  const stack = [a];

  while (stack.length) {
    const curr = stack.pop();

    for (const e of curr) {
      if (Array.isArray(e)) {
        stack.push(e);
      } else {
        sum += e;
      }
    }
  }

  return sum;
};
