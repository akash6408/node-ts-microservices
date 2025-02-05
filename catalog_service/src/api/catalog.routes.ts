import express, { NextFunction, Request, Response } from "express";
const app = express();

let router: express.Router = express.Router();

// endpoints
router.post("/product", (_req: Request, res: Response): any => {
    return res.status(201).json({
        "message": "success"
    })
});

export default router;