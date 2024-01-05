import { PrismaClient } from "@prisma/client";
import { ClothingContainer } from '../../containers/clothingContainer';
import { ClothingRepository } from "../clothingRepo";
import { ClothingMapper } from "../../mappers/clothing.mapper";

export class PrismaRepo implements ClothingRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: ClothingContainer): Promise<void> {
        try {
            const clothing = ClothingMapper.from(data);
            await this.prisma.clothing.create({ data: clothing });
        } catch (error) {
            console.error(error);
            throw new Error("Não foi possível criar a roupa");
        }
    }

    async findById(clothingCode: number): Promise<ClothingContainer> {
        try {
            const clothing = await this.prisma.clothing.findUniqueOrThrow({ where: { code: clothingCode } });
            return ClothingMapper.to(clothing);
        } catch (error) {
            throw new Error("Erro ao encontrar a roupa");
        }
    }

    async find(): Promise<ClothingContainer[]> {
        try {
            const clothingItems = await this.prisma.clothing.findMany();
            return clothingItems.map(clothing => ClothingMapper.to(clothing));
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao encontrar todas as roupas");
        }
    }

    async update(clothingCode: number, data: ClothingContainer): Promise<void> {
        try {
            const clothing = ClothingMapper.from(data);
            await this.prisma.clothing.update({ where: { code: clothingCode }, data: clothing });
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao atualizar a roupa");
        }
    }

    async delete(clothingCode: number): Promise<void> {
        try {
            await this.prisma.clothing.delete({ where: { code: clothingCode } });
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao excluir a roupa");
        }
    }
}
