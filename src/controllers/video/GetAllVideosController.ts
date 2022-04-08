import { Request, Response } from 'express';
import { Video } from "../../entities/video.entity";
import { GetAllVideosService } from "../../services/video/GetAllVideosService";

export class GetAllVideosController {
    async handle(request: Request, response: Response) : Promise<Video | Object> {
        const service = new GetAllVideosService();

        const videos = await service.execute();

        return response.json(videos);
    }
}