import { convertLength } from "../services/lengthService.js";

export default function handleLengthConvertController(req, res) {
  try {
    const { value, from, to } = req.body;

    const result = convertLength(value, from, to);

    res.render("pages/home", {
      title: "Length",
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
    res.render("pages/home", {
      title: "Length",
      showResult: true,
      data: null,
      error: err.message,
    });
  }
}
