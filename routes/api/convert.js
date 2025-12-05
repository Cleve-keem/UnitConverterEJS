import { Router } from "express";
import handleLengthConvertController from "../../controllers/lengthController.js";
import handleTempConvertController from "../../controllers/tempController.js";
import handleWeightConvertController from "../../controllers/weightController.js";

const router = Router();
router
  .post("/length", handleLengthConvertController)
  .post("/temperature", handleTempConvertController)
  .post("/weight", handleWeightConvertController);

export default router;
