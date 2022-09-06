import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getReference = async (req: Request, res: Response): Promise<Response> => {
  try {
      const response: QueryResult = await pool.query('SELECT * from reference');
      return  res.status(200).json(response.rows)// solo ver los datos de las columnas
  } catch (error) {
    console.log(error)
    return res.status(500).json('internal server')
  }
}

export const getReferenceByID = async (req: Request, res: Response): Promise<Response> => {
  const id = parseInt(req.params.id)
  const response: QueryResult = await pool.query('SELECT * FROM reference WHERE id = $1', [id])
  return res.json(response.rows)
}

 export const createReference = async (req: Request, res: Response): Promise<Response> => {
  const { tipo, name } = req.body;
  const response = await pool.query('INSERT INTO reference (tipo, name) VALUES ($1, $2)', [tipo, name])
  return res.send('received')
}

/*
export const updateReferenceByID = (req: Request, res: Response): Promise<Response> => {

}

export const deleteReferenceByID = (req: Request, res: Response): Promise<Response> => {

} */