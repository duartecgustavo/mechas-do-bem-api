import { Request, Response, Router } from "express";
import {
  getDepoimentos,
  createDepoimento
} from "./controller/DepoimentosController";
const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});
routes.get("/home", (request: Request, response: Response) => {
  return response.json({ message: "API UP" });
});

routes.get("/depoimentos", getDepoimentos);

routes.post("/depoimentos", createDepoimento);

export default routes;
