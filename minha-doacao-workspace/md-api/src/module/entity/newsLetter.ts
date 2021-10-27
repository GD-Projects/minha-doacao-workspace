import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail } from 'class-validator'

@Entity('NewsLetter')
class NewsLetter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    @IsEmail()
    email: string;   
}
export default NewsLetter;