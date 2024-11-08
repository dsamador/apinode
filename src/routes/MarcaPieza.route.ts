import  express from "express";
import MarcaPiezaController from "../controllers/MarcaPieza.controller";
import { body } from "express-validator";

const router = express.Router();

router.get('/', MarcaPiezaController.getAll);

router.post(
  '/', 
  body('nombre_marca_pieza')
    .isLength({min:3}).withMessage("Minimo 3 caracteres")
, MarcaPiezaController.register);

router.route('/:id')
  .get(MarcaPiezaController.getOne)
  .put(MarcaPiezaController.update);

export default router;