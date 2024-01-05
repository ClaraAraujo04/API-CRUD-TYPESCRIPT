import { ClothingContainer } from "../containers/clothingContainer";
import { Clothing } from "@prisma/client";


export class ClothingMapper {
    static to(clothing: Clothing): ClothingContainer {
        return {
            code: clothing.code,
            createdAt: clothing.createdAt,
            updatedAt: clothing.updatedAt,
            name: clothing.name,
            description: clothing.description ?? clothing.description,
            published: clothing.published,
            authorId: clothing.authorId
        };
    }


    static from(clothingContainer: ClothingContainer): Clothing {
        return {
            code: clothingContainer.code,
            createdAt: clothingContainer.createdAt,
            updatedAt: clothingContainer.updatedAt,
            name: clothingContainer.name,
            description: clothingContainer.description ?? clothingContainer.description,
            published: clothingContainer.published,
            authorId: clothingContainer.authorId
        };
    }
}
