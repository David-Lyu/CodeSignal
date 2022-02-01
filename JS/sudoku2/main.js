function solution(grid) {
  const yStore = new Map();
  let boxStore = new Set();
  let boxSize = 0;

  for (let i = 0; i < grid.length; i++) {
    const xStore = new Set();

    for (let j = 0; j < grid.length; j++) {
      const currentPos = grid[i][j];
      const size = xStore.size;

      //checks box
      if (i % 3 === 0) {
        if (!checkBox(i, j)) return false;
      }

      //checks y axis
      const ySet = yStore.get(j);

      if (currentPos === '.') continue;
      if (!ySet) yStore.set(j, new Set([currentPos]));
      else {
        const ySize = ySet.size;
        ySet.add(currentPos);
        if (ySet.size === ySize) return false;
      }

      //checks x axis
      xStore.add(currentPos);
      if (xStore.size === size) return false;
    }
  }
  return true;

  function checkBox(i, j) {
    const firstPos = grid[i][j] === '.' ? null : grid[i][j];
    const middlePos = grid[i + 1][j] === '.' ? null : grid[i + 1][j];
    const lastPos = grid[i + 2][j] === '.' ? null : grid[i + 2][j];

    if (i % 3 === 0 && j % 3 === 0) {
      boxStore.clear();
      boxSize = 0;
    }
    //could make this smaller by checking to see if it exists and if it doesnt then add
    if (firstPos) {
      boxStore.add(firstPos);
      boxSize++;
    }
    if (middlePos) {
      boxStore.add(middlePos);
      boxSize++;
    }
    if (lastPos) {
      boxStore.add(lastPos);
      boxSize++;
    }
    if (firstPos || middlePos || lastPos) {
      if (boxSize !== boxStore.size) return false;
    }
    return true;
  }
}
