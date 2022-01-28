function theaterSeats(
  nCols: number,
  nRows: number,
  col: number,
  row: number
): number {
  let behind: number = nCols - col + 1;
  let beside: number = nRows - row;

  return behind * beside;
}
