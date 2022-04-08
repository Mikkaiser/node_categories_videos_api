import { Request, Response } from "express";
import { Video } from "../../entities/video.entity";
import { CreateVideoService } from "../../services/video/CreateVideoService";

export class CreateVideoController {
    async handle(request: Request, response: Response) : Promise<Video | Object> {

        const service = new CreateVideoService();

        const result = await service.execute(request.body);

        return response.json(result);
    }
}
