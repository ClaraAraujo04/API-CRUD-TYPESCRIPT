import { ClothingDTO } from "../dtos/clothing.dto";
import { ClothingContainer } from "../containers/clothingContainer";



export class ClothingSearch {
    static from(clothingDTO: ClothingDTO): ClothingContainer {
        return {
            code: clothingDTO.code,
            createdAt: clothingDTO.createdAt,
            updatedAt: clothingDTO.updatedAt,
            name: clothingDTO.name,
            description: clothingDTO.description,
            published: clothingDTO.published,
            authorId: clothingDTO.authorId
        };
    }
}
