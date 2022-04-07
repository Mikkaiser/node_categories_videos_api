import { Category } from "../entities/category.entity";
import { getRepository } from "typeorm";

export class DeleteCategoryService {
    async execute(id: string) : Promise<Object | void> {
        const repo = getRepository(Category);

        if(!await repo.findOne(id)) {
            return { error: 'Category not found' }
        }

        await repo.delete(id);
    }
}