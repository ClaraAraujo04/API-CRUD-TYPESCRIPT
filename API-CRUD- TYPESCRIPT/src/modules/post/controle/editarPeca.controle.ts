import { ClothingDTO } from "../dtos/clothing.dto"; 
import { EditClothing } from "../actions/editClothing.action"; 
import { Request, Response } from 'express';



export class EditClothingController {
    constructor(private readonly service: EditClothing) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { clothingCode } = request.params;
        const data = <ClothingDTO>request.body;
        await this.service.execute(Number(clothingCode), data);



        return response.json({ message: "Dados da peça de roupa alterados com sucesso!" });
    } 
}
