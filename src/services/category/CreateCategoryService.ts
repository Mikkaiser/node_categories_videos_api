import { Category } from "../../entities/category.entity";
import { getRepository } from "typeorm";

type CategoryRequest = {
    name: string;
    description: string;
}

export class CreateCategoryService {
    async execute({ name, description }: CategoryRequest) : Promise<Category | Object> {
        const repo = getRepository(Category);

        if(await repo.findOne({ name }))
            return { error: 'Name already exists' }

        const category = repo.create({
            name, description
        });

        await repo.save(category);

        return category;
    }    
}