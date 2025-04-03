import "reflect-metadata";
import { DataSource } from "typeorm";
import { Depoimentos } from "./entity/Depoimentos";
import { EnderecosPontosContatos } from "./entity/EnderecosPontosContato";
import { LogosPatrocinadores } from "./entity/LogosPratrocinadores";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: String(process.env.DATABASE_URL),
  synchronize: true,
  logging: false,
  entities: [Depoimentos, EnderecosPontosContatos, LogosPatrocinadores],
  migrations: [],
  subscribers: [],
});
