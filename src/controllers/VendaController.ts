import { Request, Response } from "express";
import { VeicModel } from "../database/models/VeicModel";

class VendaController {
  async findRes(req: Request, res: Response) {
    const { status } = req.params;
    const reservas = await VeicModel.findAll({
      where: {
        status: status,
      },
    });

    return reservas.length > 0
      ? res.status(200).json(reservas)
      : res.status(204).send();
  }

  async findVend(req: Request, res: Response) {
    const { status } = req.params;
    const vendas = await VeicModel.findAll({
      where: {
        status: status,
      },
    });

    return vendas.length > 0
      ? res.status(200).json(vendas)
      : res.status(204).send();
  }

  async findbyId(req: Request, res: Response) {
    const { id } = req.params;
    const operacoes = await VeicModel.findAll({
      where: {
        idVendedor: id,
      },
    });

    return operacoes.length > 0
      ? res.status(200).json(operacoes)
      : res.status(204).send();
  }
}

export default new VendaController();
