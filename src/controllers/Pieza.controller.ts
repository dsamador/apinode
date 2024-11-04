import { Request, Response } from "express";
import { PiezaEntity } from "../models/PiezaEntity";

class PiezaController {
  constructor(){}

  async getAll(req: Request, res: Response){
    try {
      const data = await PiezaEntity.find();
      res.status(200).json(data);
    } catch (error) {
      if(error instanceof Error)
        res.status(500).send(error.message);
    }
  }

  async getOne(req: Request, res: Response){
    const { id } = req.params;
    try {
      const registro = await PiezaEntity.findOneBy({id: Number(id)});
      res.status(200).json(registro);
    } catch (error) {
      if(error instanceof Error)
        res.status(500).send(error.message);
    }    
  }

  async register(req: Request, res: Response){
    try {
      const registro = await PiezaEntity.save(req.body);
      res.status(201).json(registro);
    } catch (error) {
      if(error instanceof Error)
        res.status(500).send(error.message);
    }
  }

  async update(req: Request, res: Response){
    const { id } = req.params;

    try {
      const registro = await PiezaEntity.findOneBy({id: Number(id)});
      if (!registro) throw new Error('Pieza no encontrada');
      
      await PiezaEntity.update({id: Number(id)}, req.body);
      const registroActualizado = await PiezaEntity.findOneBy({id: Number(id)});
      res.status(200).json(registroActualizado);

    } catch (error) {
      if(error instanceof Error)
        res.status(500).send(error.message);
    }
  }

  async borrar(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const registro = await PiezaEntity.findOneBy({ id: Number(id) });        
        if (!registro) throw new Error('Marca no encontrada');
        
        await PiezaEntity.delete({ id: Number(id) });
        res.status(204);

    } catch (error) {
        if (error instanceof Error)
            res.status(500).send(error.message);
    }
}
}


export default new PiezaController();