import express from 'express'
const routes = express.Router()
import {RegisterController} from './src/controllers/registerController'
import {LoginController} from './src/controllers/loginController'

const registerController = new RegisterController()
const loginController = new LoginController()

routes.post("/register",registerController.Create)
routes.post("/login",loginController.login)
routes.get("/oi",registerController.oi)
routes.get("/get-all",registerController.getAll)

export { routes }