import { Request, Response } from "express";

import { Candidate } from "../models";

export const candidatesController = {
  //GET /candidates
  index: async (req: Request, res: Response) => {
    try {
      const candidates = await Candidate.findAll();
      return res.status(200).json(candidates);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //POST /candidates
  store: async (req: Request, res: Response) => {
    const { name, bio, email, phone, openToWork } = req.body;

    try {
      const candidate = await Candidate.create({
        name,
        bio,
        email,
        phone,
        openToWork,
      });

      return res.status(201).json(candidate);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  //GET /candidates/:id
  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const candidate = await Candidate.findByPk(id);
      return res.status(200).json(candidate);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //PUT /candidates/:id
  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, bio, email, phone, openToWork } = req.body;

    try {
      const candidate = await Candidate.findByPk(id);

      if (!candidate) {
        return res.status(404).json({ message: "candidato não encontrado" });
      }

      candidate.name = name;
      candidate.email = email;
      candidate.bio = bio;
      candidate.phone = phone;
      candidate.openToWork = openToWork;

      await candidate.save();

      return res.status(200).json(candidate);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
  //DELETE /candidates/:id
  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await Candidate.destroy({
        where: {
          id,
        },
      });
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },
};
