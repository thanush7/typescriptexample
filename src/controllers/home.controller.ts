import { Request,Response} from "express";

export function welcome(req:Request,res:Response):Response{
    return res.json({message:"welcome to world"});
}