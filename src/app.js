import express from "express"
import env_options from "./config.js"
import cors from "cors"

import router_auth from "./routes/router_auth.js"
import router_register from "./routes/router_register.js"
import router_account from "./routes/router_account.js"
import router_get_user from "./routes/router_get_user.js"
import router_profile from "./routes/router_profile.js"
import router_404 from "./routes/router_404.js"



const app = express()


// Middlewares
const PORT = env_options.PORT 
app.use(express.json())
app.use(cors())




// Rutas
app.use("/auth", router_auth)
app.use("/register", router_register)
app.use("/account", router_account)
app.use("/users/:user", router_get_user)
app.use("/profile", router_profile)
app.use( router_404)



app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`)
})