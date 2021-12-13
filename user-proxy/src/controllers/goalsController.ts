import { UserModel } from '../models/user';
import jwt from 'jsonwebtoken';
import * as express from 'express';
import dotenv from 'dotenv';
import { User } from '../types/userTypes';

import axios from 'axios';

dotenv.config();
const config = process.env;

export const getGoals = async (req: express.Request, res: express.Response) => {
  try {
    const token = req.query.token as string;
    const decoded = jwt.verify(token, config.TOKEN_KEY) as User;


    axios.post(`http://localhost:${config.BACKEND_PORT}/get-goals`, JSON.stringify({
            user_id: decoded.user_id
        }))
        .then((data) => res.status(200).json(data));
    res.status(400).send("invalid token");
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  }
}
