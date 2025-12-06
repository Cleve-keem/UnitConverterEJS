import { Router } from "express";

const router = Router();
router.get("/weight", (req, res) =>
  res.render("pages/weight", {
    title: "Weight",
    showResult: false,
    data: null,
    error: null,
  })
);

export default router;
