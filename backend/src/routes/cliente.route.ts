import { request, Router, type Request, type Response } from "express"; 
import { clienteService } from "../service/cliente.service"; 
import { CriarCliente } from "../types/cliente"; 

export const clienteRouter = Router();

 clienteRouter.get("/", async (_request: Request, response: Response) => 
 { try { const res = await clienteService.getAll();
     return response.json(res);
 } catch (error) { console.error(error);
         return response.status(500).json({ error: "Erro interno", }); 
} });
        
clienteRouter.post( "/", async (request: Request<{}, {}, CriarCliente>, response: Response) => {
 try { const dados = request.body; const cargo = await clienteService.create(dados); return response.status(201).json(cargo);
   } catch (error) { console.error(error); return response.status(500).json({ error: "Erro interno", }); } }, );
             
clienteRouter.get( "/:id", async (request: Request<{ id: string }>, response: Response) => { const { id } = request.params; try {
     const res = await clienteService.getById(id); return response.json(res); } catch (error) { console.error(error); return response.status(500).json({ error: "Erro interno", }); } }, );

     

