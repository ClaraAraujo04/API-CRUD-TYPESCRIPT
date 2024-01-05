import { DeleteClothingAction } from "../actions/deleteClothing.action"; // Alterei para refletir roupas
import { Request, Response } from "express";



export class DeleteClothingController {
    constructor(private readonly service: DeleteClothingAction) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { clothingCode } = request.params;
        await this.service.execute(Number(clothingCode));

        
        
        return response.json({ message: "Peça de roupa deletada com sucesso" });
    }
}
