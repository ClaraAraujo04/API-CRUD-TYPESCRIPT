import { ClothingDTO } from "../dtos/Clothing.dto"; // Alterei para refletir roupas
import { SearchClothing } from "../procura/ClothingSearch"; // Alterei para refletir roupas
import { ClothingRepository } from "../repositories/ClothingRepo"; // Alterei para refletir roupas

export class CreateClothingAction {
    constructor(
        private readonly clothingRepository: ClothingRepository
    ) { }

    async execute(data: ClothingDTO): Promise<void>{
        const clothingItem = SearchClothing.from(data);
        await this.clothingRepository.create(clothingItem);
    }
}
