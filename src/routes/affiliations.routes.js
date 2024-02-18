import { Router } from "express";
import  * as affiliationsControllers from "../controllers/affiliations.controllers";

const router = Router();

router.get('/', affiliationsControllers.getData);
router.post('/',affiliationsControllers.createAffiliations);
export default router;