import { Clothing } from "../dtos/clothing.dto";
import { ClothingInfo } from "../functions/clothingInfo.entity";


export class ClothingMapping {
    static from(clothing: Clothing): ClothingInfo {
        return {
            id: clothing.id,
            email: clothing.email,
            name: clothing.name,
        };
    }
}
