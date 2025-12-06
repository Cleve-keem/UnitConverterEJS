import { convertTemperature } from "../services/tempService.js";

export default function handleTempConvertController(req, res) {
  try {
    const { value, from, to } = req.body;

    const result = convertTemperature(value, from, to);

    res.render("pages/temp", {
      title: "temperature",
      showResult: true,
      data: {
        value,
        from,
        to,
        result,
      },
      error: null,
    });
  } catch (err) {
    res.render("pages/temp", {
      title: "temperature",
      showResult: true,
      data: null,
      error: err.message,
    });
  }
}
