import  express from "express";
import MarcaMotoController from "../controllers/MarcaMoto.controller";
import { validateCreateMarcaMoto } from "../validators/MarcaMoto.validator";

const router = express.Router();

router.get('/', MarcaMotoController.getAll);

router.post('/', validateCreateMarcaMoto , MarcaMotoController.register);

router.route('/:id')
  .get(MarcaMotoController.getOne)
  .put(MarcaMotoController.update);

export default router;