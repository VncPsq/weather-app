// Round temp to avoid decimal if not necessary
function roundTemperature(temperature) {
  const roundedTemp = Number.parseFloat(temperature).toFixed(1);

  if (roundedTemp.includes(".0")) {
    return roundedTemp.slice(0, 2);
  }

  return roundedTemp;
}

export default roundTemperature;
