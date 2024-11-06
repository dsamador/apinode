import  express from "express";
import PiezaController from "../controllers/Pieza.controller";
import { validateCreatePieza } from "../validators/Pieza.validator";

const router = express.Router();

router.get('/', PiezaController.getAll);

router.post('/', validateCreatePieza, PiezaController.register);

router.route('/:id')
  .get(PiezaController.getOne)
  .put(PiezaController.update);

export default router;