import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Video } from "./Videos";

@Entity('categories')
export class Category {

    constructor() {
        if(!this.id)
            this.id = uuid();
    }

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Video, video => video.category)
    videos: Video[];

    @Column()
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}