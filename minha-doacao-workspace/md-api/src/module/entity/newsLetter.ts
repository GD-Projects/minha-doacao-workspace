import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('NewsLetter')
class NewsLatter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    email: string;   
}
export default NewsLatter;