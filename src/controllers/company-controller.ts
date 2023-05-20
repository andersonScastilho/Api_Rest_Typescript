import { Request, Response } from "express";

import { Company } from "../models";

export const companyController = {
  index: async (req: Request, res: Response) => {
    try {
      const companies = await Company.findAll();

      return res.status(200).json(companies);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: err.message,
        });
      }
    }
  },

  save: async (req: Request, res: Response) => {
    const { name, bio, email, website } = req.body;

    try {
      const company = await Company.create({
        name,
        bio,
        website,
        email,
      });
      return res.status(201).json(company);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: "Não foi possivel cadastrar esta empresa",
        });
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const company = await Company.findByPk(id, { include: "jobs" });

      return res.status(200).json(company);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: "Ocorreu um erro ao buscar empresa",
        });
      }
    }
  },
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, bio, email, website } = req.body;

    try {
      const [affectedRows, companies] = await Company.update(
        {
          name,
          bio,
          website,
          email,
        },
        { where: { id }, returning: true }
      );

      return res.status(200).json(companies[0]);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: "Ocorreu um erro ao atualizar a empresa",
        });
      }
    }
  },
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      await Company.destroy({ where: { id } });
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: "Ocorreu um erro ao deletar empresa",
        });
      }
    }
  },
};
