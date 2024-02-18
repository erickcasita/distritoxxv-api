import { Router } from "express";
const router = Router();

router.get('/task',(req,res)=>{
    res.send('Task');
});

export default router;