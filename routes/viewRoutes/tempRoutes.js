import { Router } from "express";

const router = Router();

router.get("/temperature", (req, res) =>
  res.render("temp", { title: "Temperature" })
);

export default router;
