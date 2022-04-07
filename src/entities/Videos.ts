import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from 'uuid';
import { Category } from "./Category";

@Entity('videos')
export class Video {

    constructor() {
        if(!this.id)
            this.id = uuid();
    }

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    duration: number;

    @Column('category_id')
    categoryId: string;

    @ManyToOne(() => Category, category => category.videos)
    @JoinColumn({ name: 'category_id' })
    category: Category;

    @CreateDateColumn('created_at')
    createdAt: Date;
}