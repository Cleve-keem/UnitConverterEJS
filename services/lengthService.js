export function convertLength(value, from, to) {
  const conversions = {
    m: 1,
    dm: 0.1,
    cm: 0.01,
    km: 1000,
    mm: 0.001,
  };

  if (!conversions[from] || !conversions[to]) {
    throw new Error("Invalid length units");
  }

  const x = Number(value);
  if (isNaN(x)) {
    throw new Error("Value isn't a number");
  }
  const valueInMeters = value * conversions[from];
  
  return valueInMeters / conversions[to];
}
