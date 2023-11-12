import express, { Response, Request, NextFunction } from "express";
import auth_service from "../5-services/auth_service";
import UserModel from "../2-models/user_model";
import CredentialsModel from "../2-models/credentials_model";

const router = express.Router();

router.post("/register", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = new UserModel(req.body);
        const token = await auth_service.register(user);
        res.status(201).json(token);
    } catch (error: any) {
        next(error);
    }
});

router.post("/login", async (req: Request, res: Response, next: NextFunction) => {

    try {
        const credentials = new CredentialsModel(req.body);
        const token = await auth_service.login(credentials);
        res.json(token);
    } catch (error: any) {
        next(error);
    }
});


export default router;