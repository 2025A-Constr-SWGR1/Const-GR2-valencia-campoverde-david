exports.division = (a, b) => {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Argumentos inválidos");
  }
  if (numB === 0) {
    throw new Error("División por cero no permitida");
  }
  return numA / numB;
};
