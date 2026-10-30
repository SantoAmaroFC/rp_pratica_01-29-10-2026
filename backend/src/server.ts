import express, { response, type Request, type Response } from "express";
import { clienteRouter } from "./routes/cliente.route";
import { Pool } from "pg";

const app = express();

const port = 3000; app.use(express.json());




app.listen(port, () => { console.log(`API rodando em http://localhost:${port}`); });