function isFloat(n: number): boolean {
  return Number(n) === n && n % 1 !== 0;
}

export default isFloat;
