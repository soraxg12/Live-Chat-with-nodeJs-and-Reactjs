import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {authSecret} from '../../a'
import {registerRepository} from '../database/repositorys/registerRepository'

interface IUser{
    id:string;
    name:string;
    email:string;
    password:string
}

class LoginController{
    async login(request:Request,response:Response){
        const RegisterRepository = getCustomRepository(registerRepository)

        const {email,password}=request.body;
        try{
           
            const user = await RegisterRepository.findOne({
                where:{
                    email:email
                }
            })
            
            if(!user){
                return response.status(400).json({ error: "User not found" });
            }else{
            bcrypt.compare(password,String(user?.password),(err, result)=>{
                if(err||!result){
                    return response.status(401).json({error:"A senha informada é inválida!"})
                }
                const playload = { id:user?.id }
                response.json({
                    id:user.id,
                    Name:user.name,
                    Email:user.email,
                    token:jwt.sign(playload,authSecret),
                    })
                })
                    
            }
        }catch{
            return response.status(400).json({ error: "Problema com o login" });
        }
    }
}

export { LoginController }