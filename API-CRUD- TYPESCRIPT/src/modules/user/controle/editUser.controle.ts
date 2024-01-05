import { Clothing } from "../dtos/clothing.dto"; 
import { EditClothingAction } from "../action/editClothing.action"; 
import { Request, Response } from 'express';



export class EditClothingController {
    constructor(private readonly service: EditClothingAction) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const data = <Clothing>request.body;
        await this.service.execute(Number(id), data);
        return response.json({ message: "Roupa atualizada" });
    }
}
