import { ClothingContainer } from "../containers/clothingContainer";



export interface ClothingRepository {
    create(data: ClothingContainer): Promise<void>;
    findById(clothingCode: number): Promise<ClothingContainer>;
    find(): Promise<ClothingContainer[]>;
    update(clothingCode: number, data: ClothingContainer): Promise<void>;
    delete(clothingCode: number): Promise<void>;
}
