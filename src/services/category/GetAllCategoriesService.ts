import { Category } from "../entities/category.entity";
import { getRepository } from "typeorm";

export class GetAllCategoriesService {
    async execute() {
        const repo = getRepository(Category);

        return await repo.find();
    }
}