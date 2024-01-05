import { ClothingInfo } from "../functions/clothingInfo.entity"; 
import { ClothingRepository } from '../repositories/clothing.repository'; 



export class SearchClothingAction {
    constructor(
        private readonly clothingRepository: ClothingRepository
    ) {}
    async execute(): Promise<ClothingInfo[]> {
        const clothing = await this.clothingRepository.find();
        return clothing;
    }
}
