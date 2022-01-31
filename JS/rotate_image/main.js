function solution(a) {
  const outerArr = [];
  const flat = a.flat();

  for (let i = 0; i < a.length; i++) {
    outerArr.push([a[a.length - 1][i]]);
  }

  for (let i = flat.length - a.length - 1; i >= 0; --i) {
    let mod = i % a.length;
    outerArr[mod].push(flat[i]);
  }
  return outerArr;
}

// time complexity is O(nm)? the limiting factor is Array.flat();
// everything else is O(n)
// space complexity is O(n^2)?
