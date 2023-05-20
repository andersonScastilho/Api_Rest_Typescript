import { Router } from "express";
import { candidatesController } from "./controllers/candidates-controller";
import { companyController } from "./controllers/company-controller";
import { JobsController } from "./controllers/jobs-controller";

const router = Router();

//Candidates

router.get("/candidates", candidatesController.index);
router.post("/candidates", candidatesController.store);

router.get("/candidates/:id", candidatesController.show);
router.delete("/candidates/:id", candidatesController.delete);
router.put("/candidates/:id", candidatesController.update);

//Companies
router.get("/companies", companyController.index);
router.post("/companies", companyController.save);

router.get("/companies/:id", companyController.show);
router.delete("/companies/:id", companyController.delete);
router.put("/companies/:id", companyController.update);

router.get("/jobs", JobsController.index);

export { router };
