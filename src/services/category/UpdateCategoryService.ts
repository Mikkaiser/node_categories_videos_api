import { Category } from "../../entities/category.entity";
import { getRepository } from "typeorm";

type CategoryUpdateRequest = {
    id: string;
    name: string;
    description: string;
}


export class UpdateCategoryService {
    async execute({id, name, description}: CategoryUpdateRequest) : Promise<Category | Object> {

        const repo = getRepository(Category);
        const category = await repo.findOne(id);

        if(!category)
            return { error: 'Category does not exists' }

        category.name = name ? name : category.name;
        category.description = name ? description : category.description;

        await repo.save(category);

        return category;

    }
}