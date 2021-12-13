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


    res.status(200).json({
       list:[
         {
            id: "1",
	    state: "InProgress",
	    name: "Presentation",
	    description: "this is the description",
	    milestones: [],
	    published: true,
	    deadline: "12/Sep",
	    dateCreated: "10/9/2021",
	    dateFinished: null
         }, 
         {
            id: "2",
	    state: "Done",
	    name: "Finish SSAD project",
	    description: "description here",
	    milestones: [],
	    published: false,
	    deadline: "24/Sep",
	    dateCreated: "10/7/2021",
	    dateFinished: "10/9/2021"
         }
       ]
    })
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err);
  }
}
