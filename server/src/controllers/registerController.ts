import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import bcrypt from 'bcryptjs'
import {registerRepository} from '../database/repositorys/registerRepository'

class RegisterController{
    async Create(request:Request,response:Response){
        const {email,name,password} = request.body
        const hashPassword = await bcrypt.hash(password, 10)
        const RegisterRepository = getCustomRepository(registerRepository)

        try {
            if (await RegisterRepository.findOne({
                where:{
                    email:email
                }
             })) {
                return response.status(400).json({ error: "User already exists" });
            }
            const register =  RegisterRepository.create({
                email:email,
                name:name,
                password:hashPassword 
            })

            await RegisterRepository.save(register)

            return response.status(200).json(register)

        }catch(err){
            return response.status(400).json({ error: "User registration failed" });
        }
    }

    async getAll(request:Request,response:Response){
        const RegisterRepository = getCustomRepository(registerRepository)

        const all = await RegisterRepository.find()

        return response.status(200).json(all)
    }

    async oi(request:Request,response:Response){
        return response.send("oi")
    }
}

export { RegisterController }