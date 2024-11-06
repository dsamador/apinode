import { Request, Response, NextFunction } from 'express';
import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper";

export const validateCreatePieza = [
  check('nombre_pieza')
    .exists().withMessage("Este nombre de pieza ya existe")
    .not()
    .isEmpty().withMessage("No puedes dejar este campo sin llenar")
    .trim()
    .isLength({min: 1}).withMessage("El tamaño mínimo es de un caracter"),
    (req: Request, res: Response, next: NextFunction) =>{
      validateResult(req, res, next)
    }
]