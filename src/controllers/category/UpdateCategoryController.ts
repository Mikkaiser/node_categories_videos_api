import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";

export class UpdateCategoriesController {
    async handle(request: Request, response: Response) : Promise<Category | Object>{

        const service = new UpdateCategoryService();

        const category = await service.execute(request.body);

        return response.status(201).json(category);
    }
}