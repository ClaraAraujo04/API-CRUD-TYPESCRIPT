import { Clothing } from "../dtos/clothing.dto"; 
import { ClothingMapping } from "../mapping/clothing.mapping"; 
import { ClothingRepository } from "../repositories/clothing.repository"; 


export class EditClothingAction {
    constructor(
        private readonly clothingRepository: ClothingRepository
    ) { }
    async execute(id: number, data: Clothing): Promise<void> {
        const clothing = ClothingMapping.from(data);
        await this.clothingRepository.update(id, clothing);
    }
}
