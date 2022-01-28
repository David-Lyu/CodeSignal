function largestNum(n: number): number {
  let str: string = '9';
  for (let i: number = 1; i < n; i++) {
    str += '9';
  }

  return parseInt(str);
}
