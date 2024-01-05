import { ClothingRepo } from "../repositories/ClothingRepo"; 



export class DeleteClothingRepo {
    constructor(
        private readonly clothingRepository: ClothingRepo
    ) {}
    async execute(codigo: number): Promise<void> {
        await this.clothingRepository.delete(codigo);
    }
}
