import "reflect-metadata";
import { DataSource } from "typeorm";
import { Depoimentos } from "./entity/Depoimentos";
import { EnderecosPontosContatos } from "./entity/EnderecosPontosContato";
import { LogosPatrocinadores } from "./entity/LogosPratrocinadores";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "heffalump.db.elephantsql.com",
  port: 5432,
  username: "tjnueevx",
  password: "aItcxKH2jHy4hUTYgKl-hYb4IQ5gU8B4",
  database: "tjnueevx",
  synchronize: true,
  logging: false,
  entities: [Depoimentos, EnderecosPontosContatos, LogosPatrocinadores],
  migrations: [],
  subscribers: [],
});
