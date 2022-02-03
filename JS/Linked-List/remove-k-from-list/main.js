//non-recursive
function solution(l, k) {
  let current = l;
  let before = null;
  let start = 0;

  while (current) {
    if (current.value === k) {
      if (start === 0) {
        l = current.next;
        current = l;
        continue;
      } else {
        const nextVal = current.next;
        before.next = nextVal;
      }
    } else {
      before = current;
    }

    if (start === 0) start++;
    current = current.next;
  }
  return l;
}

//recursive
function solution(l, k) {
  if (l === null) return null;

  l.next = solution(l.next, k);

  if (l.value === k) return l.next;

  return l;
}

//both O(n) and O(1) time, space respectively
