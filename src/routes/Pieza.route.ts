import  express from "express";
import PiezaController from "../controllers/Pieza.controller";

const router = express.Router();

router.get('/', PiezaController.getAll);

router.post('/', PiezaController.register);

router.route('/:id')
  .get(PiezaController.getOne)
  .put(PiezaController.update);

export default router;