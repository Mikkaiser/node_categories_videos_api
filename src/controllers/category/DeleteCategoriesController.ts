import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";


export class DeleteCategoriesController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCategoryService();
        
        await service.execute(id);

        return response.status(204).end();
    }
}