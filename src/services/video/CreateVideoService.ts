import { getRepository } from "typeorm";
import { Category } from "../../entities/category.entity";
import { Video } from "../../entities/video.entity";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    categoryId : string;
}

export class CreateVideoService {
    async execute(video: VideoRequest) : Promise<Video |Object> {
        const { name, description, categoryId } = video;

        const repo = getRepository(Video);
        const categoryRepo = getRepository(Category);
        const category = await categoryRepo.findOne(categoryId); 
        
        if(!category)
            return { error: 'Category does not exists' }

        const video = repo.create({ name, description, duration, categoryId })

    }
}