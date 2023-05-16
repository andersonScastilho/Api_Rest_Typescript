import express from "express";
import dotenv from "dotenv";
import { Candidate } from "./models/candidates";

dotenv.config();

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ Hello: "Hello World" });
});
router.get("/candidates", async (req, res) => {
  const candidates = await Candidate.findAll();
  res.json(candidates);
});

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Aplicação iniciada");
});
