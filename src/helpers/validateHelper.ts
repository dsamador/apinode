import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

interface ValidationError extends Error {
    array: () => { msg: string, param: string, location: string }[];
}

const validateResult = (req: Request, res: Response, next: NextFunction) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        const validationError = err as ValidationError;
        res.status(403);
        res.send({ errors: validationError.array() });
    }
};

export { validateResult };
