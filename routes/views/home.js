import { Router } from "express";

const router = Router();
router.get("/length", (req, res) =>
  res.render("pages/home", {
    title: "Length",
    showResult: false,
    data: null,
    error: null,
  })
);

export default router;
