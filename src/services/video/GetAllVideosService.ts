import { Video } from "../../entities/video.entity";
import { getRepository } from "typeorm";



export class GetAllVideosService {
    async execute() : Promise<Video | Object> {

        const repo = getRepository(Video);

        const videos = await repo.find();

        return videos;
    }
}