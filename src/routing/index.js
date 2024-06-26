import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import likeRouter from "./likeRouter.js";

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/like', likeRouter);

export default router;
