import { ClothingDTO } from "../dtos/Clothing.dto"; 
import { SearchClothing } from "../procura/ClothingSearch.procura"; 
import { ClothingRepo } from "../repositories/ClothingRepo"; 

export class EditClothing {
    constructor(
        private readonly clothingRepository: ClothingRepo
    ) {}
    async execute(codigo: number, data: ClothingDTO): Promise<void> {
        const clothing = SearchClothing.from(data); 
        await this.clothingRepository.update(codigo, clothing);
    }
}
