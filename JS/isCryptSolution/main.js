function solution(crypt, solution) {
  const solMap = new Map();
  let cryptSol = 0;
  let word3 = 0;
  for (let i = 0; i < solution.length; i++) {
    solMap.set(solution[i][0], solution[i][1]);
  }

  //can make this into function and just call the first 3. Better algo since the restraints are known
  for (let i = 0; i < crypt.length; i++) {
    let word = crypt[i];
    let decrypt = '';
    for (let j = 0; j < word.length; j++) {
      const getNum = solMap.get(word[j]);
      if (getNum === '0' && j === 0 && word.length > 1) return false;
      decrypt += getNum;
    }
    if (i < crypt.length - 1) cryptSol += parseInt(decrypt);
    if (i === crypt.length - 1) word3 += parseInt(decrypt);
  }
  // console.log(cryptSol);
  if (cryptSol !== word3) return false;
  return true;
}
