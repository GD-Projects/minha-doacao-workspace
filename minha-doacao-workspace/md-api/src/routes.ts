import { Router } from "express";
import NewsLetterController from "./module/controllers/newsLetterController";

const router = Router();

router.post('/newsLetter', NewsLetterController.store)

export default router;