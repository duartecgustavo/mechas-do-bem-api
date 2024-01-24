import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('LogosPatrocinadores')
export class LogosPatrocinadores {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    NomeImagem: string;

    @Column()
    CaminhoImagem: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
