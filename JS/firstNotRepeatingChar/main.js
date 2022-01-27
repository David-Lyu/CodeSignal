function solution(s) {
  const hashMap = new Map();
  for (let i = 0; i < s.length; i++) {
    const property = hashMap.get(s[i]);
    if (!property) {
      hashMap.set(s[i], [1, i]);
      continue;
    }
    property[0] = ++property[0];
    hashMap.set(s[i], property);
  }

  let tempIndex = -1;
  let tempChar = '';

  for (const arr of hashMap) {
    const prop = arr[0];
    const element = arr[1];
    // console.log(element)
    if (element[0] > 1) continue;
    if (tempIndex === -1) {
      tempIndex = element[1];
      tempChar = prop;
      continue;
    }
    if (tempIndex > element[1]) {
      tempIndex = element[1];
      tempChar = prop;
    }
  }

  return tempChar ? tempChar : '_';
}

// saw solution where they split then check the lastIndexOf to do it. This might
//  be slower worse case since lastIndexOf still searches through the array.
//  best case this would be faster.
