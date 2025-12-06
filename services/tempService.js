export function convertTemperature(value, from, to) {
  value = parseFloat(value);
  from = from.toLowerCase();
  to = to.toLowerCase();

  if (isNaN(value)) {
    throw new Error("temperature value must be a number");
  }

  let celsius;

  switch (from) {
    case "c":
    case "celcius":
      celsius = value;
      break;

    case "f":
    case "fahrenheit":
      celsius = ((value - 32) * 5) / 9;
      break;

    case "k":
    case "kelvin":
      celsius = value - 273.15;
      break;

    default:
      throw new Error("Invalid 'from' temperature unit");
  }

  let result;

  switch (to) {
    case "c":
    case "celcius":
      result = celsius;
      break;

    case "f":
    case "fahrenheit":
      result = ((celsius - 32) * 5) / 9;
      break;

    case "k":
    case "kelvin":
      result = celsius - 273.15;
      break;

    default:
      throw new Error("Invalid 'to' temperature unit");
  }
  return Number(result.toFixed(2));
}
