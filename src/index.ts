import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(routes);

    app.listen(3334, () => {
      console.log("Servidor rodando na porta 3334");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });
