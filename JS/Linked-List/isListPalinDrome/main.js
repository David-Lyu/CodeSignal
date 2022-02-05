function solution(l) {
  //get the length;
  let length = 0;
  let current = l;
  let midPoint = 0;
  let firstHalf = '';
  let secondHalf = '';
  let index = 0;
  while (current) {
    ++length;
    current = current.next;
  }

  midPoint = Math.ceil(length / 2) - 1;
  current = l;

  while (current) {
    if (index < midPoint) firstHalf += current.value;
    else if (index > midPoint) secondHalf = current.value + secondHalf;
    else if (index === midPoint) {
      if (length % 2 === 0) {
        firstHalf += current.value;
      }
    }
    current = current.next;
    ++index;
  }

  return firstHalf === secondHalf;
}
