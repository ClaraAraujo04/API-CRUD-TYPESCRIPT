import { SearchClothingAction } from "../action/searchClothing.action"; 
import { Request, Response } from "express";



export class SearchClothingController {
    constructor(private readonly service: SearchClothingAction) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const clothing = await this.service.execute();

        return response.json(clothing);
    }
}
