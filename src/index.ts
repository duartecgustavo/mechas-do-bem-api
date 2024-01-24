import * as bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import routes from "./routes";

AppDataSource.initialize().then(async () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(routes);

  app.listen(3334);
});
