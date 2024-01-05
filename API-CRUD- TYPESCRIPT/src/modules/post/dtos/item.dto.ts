import { UserInfo } from "../../user/functions/userData.entity";


export interface ClothingDTO {
    code: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    published: boolean;
    authorId: UserInfo["code"];
}
