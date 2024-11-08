import { Request, Response, NextFunction } from 'express';
import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper";

export const validateCreateMarcaMoto = [
  check('nombre_marca_moto')    
    .not()
    .isEmpty().withMessage("No puedes dejar este campo sin llenar")
    .trim()
    .isLength({min: 2}).withMessage("El tamaño mínimo es de dos caracteres"),
    (req: Request, res: Response, next: NextFunction) =>{
      validateResult(req, res, next)
    }
]