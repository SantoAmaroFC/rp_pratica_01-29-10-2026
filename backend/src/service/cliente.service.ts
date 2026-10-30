import { Client } from "pg";
import { pool } from "../database/connections";
 import { Cliente, CriarCliente } from "../types/cliente";
 
 class ClienteService{
     
    async getAll(): Promise<Cliente[]> {
         const res = await pool.query<Cliente>("SELECT * FROM cliente"); 
         return res.rows; } 
  
  async getById(id: string): Promise<Cliente[]>
   { const res = await pool.query<Cliente>( "SELECT * FROM cliente WHERE id = $1", [id], ); 
   return res.rows; }
  
  async create(dados: CriarCliente): Promise<Cliente> {
       const res = await pool.query<Cliente>( `INSERT INTO cliente (nome) VALUES ($1) (telefone) VALUES ($2) (dt_nascimento) VALUES ($3) (email) VALUES ($4) RETURNING *`, [dados.nome, dados.telefone, dados.email, dados.idade], ); const cliente = res.rows[0]; if (!cliente) { throw new Error("O banco não retornou o cliente cadastrado"); } 
       return cliente; } }

     
  
  
  export const clienteService = new ClienteService