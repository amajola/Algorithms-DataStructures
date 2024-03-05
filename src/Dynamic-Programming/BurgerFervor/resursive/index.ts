function max(v1: number, v2: number): number {
  if (v1 > v2) {
    return v1;
  }
  return v2;
}

function solve_t(m: number, n: number, t: number) {
  let first: number;
  let second: number;

  if (t === 0) {
    return 0;
  }

  if (t >= m) {
    first = solve_t(m, n, t - m);
  } else first - 1;

  if (t >= n) {
    second = solve_t(m, n, t - m);
  } else second - 1;

  if (first === -1 && second === -1) {
    return -1;
  } else return max(first, second) - 1;
}
