import { ClothingRepository } from '../repositories/clothing.repository'; 

export class DeleteClothingAction {
    constructor(
        private readonly clothingRepository: ClothingRepository
    ) {}
    async execute(id: number): Promise<void> {
        await this.clothingRepository.delete(id);
    }
}
