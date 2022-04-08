import { Router } from "express";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { DeleteCategoriesController } from "./controllers/category/DeleteCategoriesController";
import { GetAllCategoriesController } from "./controllers/category/GetAllCategoriesController";
import { UpdateCategoriesController } from "./controllers/category/UpdateCategoryController";
import { CreateVideoController } from "./controllers/video/CreateVideoController";
import { GetAllVideosController } from "./controllers/video/GetAllVideosController";

export const routes = Router();

//#region Category Routes

routes.post('/categories', new CreateCategoryController().handle);
routes.get('/categories', new GetAllCategoriesController().handle);
routes.delete('/categories/:id', new DeleteCategoriesController().handle);
routes.put('/categories/:id', new UpdateCategoriesController().handle);

//#endregion

//#region Video Routes
routes.post('/videos', new CreateVideoController().handle);
routes.get('/videos', new GetAllVideosController().handle);
//#endregion
