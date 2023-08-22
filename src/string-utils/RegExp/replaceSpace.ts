function removeSpaces(str: string): string {
  return str.replace(/\s/g, "");
}

console.log(
  removeSpaces(`a2119na awefwa
  awfaw
  
  waef
  
  
  ewe                                               we        awef ee
  `),
);
