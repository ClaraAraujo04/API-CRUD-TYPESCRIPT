import { ClothingInfo } from "../../user/functions/clothingData.entity"; 



export interface ClothingContainer {
    code: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    published: boolean;
    authorId: ClothingInfo["code"]; 
}