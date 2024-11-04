import  express from "express";
import MarcaPiezaController from "../controllers/MarcaPieza.controller";

const router = express.Router();

router.get('/', MarcaPiezaController.getAll);

router.post('/', MarcaPiezaController.register);

router.route('/:id')
  .get(MarcaPiezaController.getOne)
  .put(MarcaPiezaController.update);

export default router;