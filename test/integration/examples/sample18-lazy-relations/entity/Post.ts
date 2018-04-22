import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import {Author} from "./Author";
import {Category} from "./Category";

@Entity("Post")
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToOne(type => Author, author => author.posts, {
        // cascade: ["insert"],
        onDelete: "SET NULL"
    })
    author: Promise<Author|null>;

    @ManyToMany(type => Category, category => category.Post, {
        // cascade: true
    })
    @JoinTable()
    Category: Promise<Category[]>;

}