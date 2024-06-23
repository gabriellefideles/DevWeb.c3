import { Request, Response } from 'express';
import * as AuthService from '../services/AuthService'; // Importa funções do AuthService

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await AuthService.registerUser(name, email, password);
    res.status(201).json(user);
  } catch (error: any) { // Especifica 'error' como do tipo 'any'
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const accessToken = await AuthService.loginUser(email, password);
    res.json({ accessToken });
  } catch (error: any) { // Especifica 'error' como do tipo 'any'
    res.status(401).json({ error: error.message });
  }
};
