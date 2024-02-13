function pickRandom(array: any[], n: number) {
  return array.sort(() => 0.5 - Math.random()).slice(0, n);
}

export default pickRandom;
