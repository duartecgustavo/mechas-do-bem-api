import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('EnderecosPontosContatos')
export class EnderecosPontosContatos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Endereco: string;

    @Column()
    PontoColeta: string;

    @Column()
    FormaContato: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
