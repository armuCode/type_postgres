import { Pool } from "pg";

export const pool = new Pool ({
  user: 'postgres',
  host: 'localhost', // va el dominio
  password: '123456',
  database: 'invultec',
  port: 5432
})