import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Depoimentos } from "../entity/Depoimentos"

const repositoryDepoimentos = AppDataSource.getRepository(Depoimentos);

export const createDepoimento = async (req: Request, res: Response) => {
  try {
    const depoimentosData = req.body;

    const savedDepoimentos = await repositoryDepoimentos.save(depoimentosData);

    return res.json({
      mensagem: 'Depoimento cadastrado com sucesso.',
      savedDepoimentos
    })
  } catch (error) {
    return res.json({
      mensagem: 'ERRO: Depoimento não cadastrado com sucesso.',
      error
    })
  }
};

export const getDepoimentos = async (req: Request, res: Response) => {
  try {
    const depoimentos = await repositoryDepoimentos.find();

    return res.json({mensagem: "Depoimentos recuperados com sucesso.", depoimentos: depoimentos});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
};
