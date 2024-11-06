import { check } from "express-validator";

const validateCreatePieza = [
  check('nombre_pieza')
    .trim()
    .notEmpty()
    .isString()    
]