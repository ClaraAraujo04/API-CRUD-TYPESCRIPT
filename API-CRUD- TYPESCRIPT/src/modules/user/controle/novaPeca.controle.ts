import { Clothing } from "../dtos/clothing.dto"; 
import { NewClothingAction } from "../action/newClothing.action"; 
import { Request, Response } from "express";



export class NewClothingController {
    constructor(private readonly service: NewClothingAction) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const clothing = <Clothing>request.body;
        await this.service.execute(clothing);
        
        return response.json({ message: "Roupa criada com sucesso" });
    }
}
