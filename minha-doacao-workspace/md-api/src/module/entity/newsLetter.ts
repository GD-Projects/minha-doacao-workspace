import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('NewsLetter')
class NewsLetter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    email: string;   
}
export default NewsLetter;