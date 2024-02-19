import { Router } from "express";
import  * as affiliationsControllers from "../controllers/affiliations.controllers";

const router = Router();

router.get('/', affiliationsControllers.getData);
router.post('/',affiliationsControllers.createAffiliations);
router.get('/:id/',affiliationsControllers.getAffilationsById);

export default router;