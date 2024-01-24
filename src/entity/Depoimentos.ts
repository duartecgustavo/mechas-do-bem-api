import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Depoimentos')
export class Depoimentos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Titulo: string;

    @Column()
    Nome: string;

    @Column('text')
    Conteudo: string;
    
    @Column()
    Email: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
