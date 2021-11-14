function getColor() {
  const colorArray = [];

  for (let i = 0; i < 3; i++) {
    const color = Math.round(Math.random() * 255);
    colorArray.push(color);
  }
  // return colorArray;
  return `rgb(${colorArray})`;
}

export default getColor;
// export default `rgb(${getColor()})`
