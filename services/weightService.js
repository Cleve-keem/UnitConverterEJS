export function convertWeight(value, from, to) {
  const conversions = {
    oz: 28.35,
    ib: 4.536,
    mg: 0.001,
    g: 1,
    kg: 1000,
    t: 1000000,
  };

  if (!conversions[from] || !conversions[to]) {
    throw new Error("‼ From and To input is required");
  }

  let valueTogram = value * conversions[from];

  return valueTogram / conversions[to];
}
