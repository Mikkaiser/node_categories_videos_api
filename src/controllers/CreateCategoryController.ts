import { Request, Response } from "express";
import { CreateCategoryService } from "../services/category/CreateCategoryService";


export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const service = new CreateCategoryService();
        const result = await service.execute({ name, description });

        if('error' in result)
            return response.status(400).json(result);

        return response.json(result);
    }
}