import { Router } from "express";

const router = Router();

router.get("/temperature", (req, res) =>
  res.render("pages/temp", {
    title: "Temperature",
    showResult: false,
    data: null,
    error: null,
  })
);

export default router;
