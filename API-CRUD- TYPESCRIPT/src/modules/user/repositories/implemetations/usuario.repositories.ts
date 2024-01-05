import { PrismaClient } from "@prisma/client";
import { ClothingInfo } from "../../functions/clothingInfo.entity"; 
import { ClothingRepository } from "../clothing.repository"; 
import { ClothingPrismaMapping } from '../../pesquisa/clothing.prisma.mapping'; 

export class PrismaClothingRepository implements ClothingRepository {
    private prisma;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: ClothingInfo): Promise<void> {
        try {
            const clothing = ClothingPrismaMapping.from(data);
            await this.prisma.clothing.create({ data: clothing });
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao criar roupa");
        }
    }

    async findById(id: number): Promise<ClothingInfo> {
        try {
            const clothing = await this.prisma.clothing.findUniqueOrThrow({ where: { id } });
            return ClothingPrismaMapping.to(clothing);
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao encontrar roupa");
        }
    }

    async find(): Promise<ClothingInfo[]> {
        try {
            const clothingList = await this.prisma.clothing.findMany();
            return clothingList.map(clothing => ClothingPrismaMapping.to(clothing));
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao encontrar todas as roupas");
        }
    }

    async update(id: number, data: ClothingInfo): Promise<void> {
        try {
            const clothing = ClothingPrismaMapping.from(data);
            await this.prisma.clothing.update({ where: { id }, data: clothing });
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao atualizar a roupa");
        }
    }

    async delete(id: number): Promise<void> {
        try {
            await this.prisma.clothing.delete({ where: { id } });
        } catch (error) {
            console.log(error);
            throw new Error("Erro ao deletar roupa");
        }
    }
}
