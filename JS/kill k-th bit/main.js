function solution(n, k) {
  const nBin = changeToBin(n);
  const newBin = changeTargetKth(nBin, k);
  if (nBin === newBin) return n;

  return returnToDeci(newBin);
}

function changeToBin(bin) {
  let deci = '';
  while (bin >= 1) {
    deci = (bin % 2) + deci;
    bin = Math.floor(bin / 2);
  }
  return deci;
}

function changeTargetKth(nbin, k) {
  let index = nbin.length - k;
  if (nbin[index] === 0) return nbin;

  nbin =
    nbin.substring(0, index) + '0' + nbin.substring(index + 1, nbin.length);
  return nbin;
}

function returnToDeci(n) {
  let bin = 0;
  let i = n.length - 1;
  let j = 0;
  for (; i >= 0; i--) {
    console.log(bin, j);
    bin += +n[j++] * Math.pow(2, i);
  }
  return bin;
}
