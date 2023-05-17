import { Router } from "express";
import { candidatesController } from "./controllers/candidates-controller";
const router = Router();

//Candidates

router.get("/candidates", candidatesController.index);
router.post("/candidates", candidatesController.store);

router.get("/candidates/:id", candidatesController.show);
router.delete("/candidates/:id", candidatesController.delete);
router.put("/candidates/:id", candidatesController.update);

export { router };
