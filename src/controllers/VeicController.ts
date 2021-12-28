import { Request, Response } from "express";
import { VeicModel } from "../database/models/VeicModel";

class VeicController {
  async findAll(req: Request, res: Response) {
    const veics = await VeicModel.findAll();
    return veics.length > 0
      ? res.status(200).json(veics)
      : res.status(204).send();
  }

  async findOne(req: Request, res: Response) {
    const { veicId } = req.params;
    const veic = await VeicModel.findOne({
      where: {
        id: veicId,
      },
    });
    return veic ? res.status(200).json(veic) : res.status(204).send();
  }

  async create(req: Request, res: Response) {
    const { marca, modelo, valor, cor, km, status, idVendedor } = req.body;
    const veic = await VeicModel.create({
      marca,
      modelo,
      valor,
      cor,
      km,
      status,
      idVendedor,
    });
    return res.status(201).json(veic);
  }

  async update(req: Request, res: Response) {
    const { veicId } = req.params;
    await VeicModel.update(req.body, { where: { id: veicId } });

    return res.status(204).send();
  }

  async delete(req: Request, res: Response) {
    const { veicId } = req.params;
    await VeicModel.destroy({ where: { id: veicId } });

    return res.status(204).send();
  }
}

export default new VeicController();
