import {
    newClothingController,
    initialClothingController,
    clothingControlFin,
    deleteClothingController,
    editClothingController
} from "../modules/clothing";  

import { Router, Request, Response } from "express";

const routes = Router();

routes.post("/clothings", (req: Request, res: Response) => {
    newClothingController.handle(req, res);
});

routes.get("/clothings", (req: Request, res: Response) => {
    initialClothingController.handle(req, res);
});

routes.get("/clothings/:id", (req: Request, res: Response) => {
    clothingControlFin.handle(req, res);
});

routes.delete("/clothings/:id", (req: Request, res: Response) => {
    deleteClothingController.handle(req, res);
});

routes.put("/clothings/:id", (req: Request, res: Response) => {
    editClothingController.handle(req, res);
});

export default routes;
