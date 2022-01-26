function solution(a) {
  const cacheNumbers = new Map();

  for (let i = 0; i < a.length; ++i) {
    let element = a[i];
    let getNum = cacheNumbers.get(element);
    if (!getNum) {
      cacheNumbers.set(element, 1);
      continue;
    }
    return element;
  }
  return -1;
}
