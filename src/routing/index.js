import { Router } from "express";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import likeRouter from "./likeRouter.js";
import songRouter from "./songRouter.js";

const router = Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/like', likeRouter);
router.use('/song', songRouter)

export default router;
