import { Router } from "express";
import ClothingRoutes from "./clothing.routes"; 

const routes = Router();

routes.use(ClothingRoutes);

export default routes;
