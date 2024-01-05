import { ClothingDTO } from "../dtos/clothing.dto";
import { CreateClothing } from "../actions/newClothing.action"; 
export class NewClothingController {
    constructor(private readonly service: CreateClothing) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const clothing = <ClothingDTO>request.body; 
        await this.service.execute(clothing);


        return response.json({ message: "Nova roupa adicionada com sucesso" }); 
    }
}
