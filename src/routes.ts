import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { DeleteCategoriesController } from "./controllers/DeleteCategoriesController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { UpdateCategoriesController } from "./controllers/UpdateCategoryController";

export const routes = Router();

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoriesController().handle);
routes.put('/categories/:id', new UpdateCategoriesController().handle);