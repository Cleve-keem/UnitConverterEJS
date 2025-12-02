import { Router } from "express";

const router = Router();

router.get("/weight", (req, res) => res.render("weight", { title: "Weight" }));

export default router;
