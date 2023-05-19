import express from "express";
import dotenv from "dotenv";
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
dotenv.config();

import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Started!");
});
