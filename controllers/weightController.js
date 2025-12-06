import { convertWeight } from "../services/weightService.js";

export default function handleWeightConvertController(req, res) {
  try {
    const { value, from, to } = req.body;

    const result = convertWeight(value, from, to);

    res.render("pages/weight", {
      title: "Weight",
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
    res.render("pages/weight", {
      title: "Weight",
      showResult: true,
      data: null,
      error: err.message,
    });
  }
}
