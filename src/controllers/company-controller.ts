import { Request, Response } from "express";

import { Company } from "../models/company";

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
          message: err.message,
        });
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const company = await Company.findByPk(id);

      return res.status(200).json(company);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: err.message,
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

      return res.status(201).json(companies[0]);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({
          message: err.message,
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
          message: err.message,
        });
      }
    }
  },
};