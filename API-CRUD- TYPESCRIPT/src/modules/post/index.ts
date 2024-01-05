import { ClothingRepository } from "./repositories/implementations/prisma-clothing.repository";
import { NewClothingController } from "./controllers/newClothing.controller";
import { CreateClothing } from "./actions/createClothing.action";
import { InitialClothingController } from "./controllers/initialClothing.controller";
import { ClothingInitAction } from "./actions/clothingInit.action";
import { ClothingControlFin } from "./controllers/clothingCommand.controller";
import { ClothingFinAction } from "./actions/clothingCommand.action";
import { DeleteClothingController } from "./controllers/deleteClothing.controller";
import { DeleteClothingAction } from "./actions/deleteClothing.action";
import { EditClothingController } from "./controllers/editClothing.controller";
import { EditClothingAction } from "./actions/editClothing.action";

const repository = new ClothingRepository();
const createService = new CreateClothing(repository);
const newClothingController = new NewClothingController(createService);
const findOneService = new ClothingInitAction(repository);
const initialClothingController = new InitialClothingController(findOneService);
const findService = new ClothingFinAction(repository);
const clothingControlFin = new ClothingControlFin(findService);
const removeService = new DeleteClothingAction(repository);const deleteClothingController = new DeleteClothingController(removeService);
const updateService = new EditClothingAction(repository);
const editClothingController = new EditClothingController(updateService);


export {
    newClothingController,
    initialClothingController,
    clothingControlFin,
    deleteClothingController,
    editClothingController
};
