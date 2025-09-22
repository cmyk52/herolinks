import express from "express"
import  controller_auth  from "../controllers/controller_auth.js"
const router_auth = express.Router({ mergeParams: true })


router_auth.post("/", controller_auth)



export default router_auth