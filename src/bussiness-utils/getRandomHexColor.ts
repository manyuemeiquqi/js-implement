function getRandomHexColor(): string {
  function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const rr = getRandomNumber(0, 255).toString(16);
  const gg = getRandomNumber(0, 255).toString(16);
  const bb = getRandomNumber(0, 255).toString(16);
  return `#${rr}${gg}${bb}`;
}
console.log(getRandomHexColor());
