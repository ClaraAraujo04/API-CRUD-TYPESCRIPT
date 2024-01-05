import { ClothingInfo } from "../functions/clothingInfo.entity"; 

export interface ClothingRepository {
    create(data: ClothingInfo): Promise<void>;
    findById(id: number): Promise<ClothingInfo>;
    find(): Promise<ClothingInfo[]>;
    update(id: number, data: ClothingInfo): Promise<void>;
    delete(id: number): Promise<void>;
}
