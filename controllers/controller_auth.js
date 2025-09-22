import {model_auth} from "../models/model_auth.js"
import {compare_password} from "../utils/crypto.js"


// GET (verificar usuario)
export const controller_auth = async (req,res) =>{ 
    try{    const {user_name, password} = req.body
    
    if(!user_name || !password){
        return res.status(404).json({message:"No se ha ingresado usuario o password"})
    }

    const response = await model_auth(user_name, password)
    
    if(response === 404){
        res.status(404).json({message:"Usuario o password incorrectos"})
    }
    
    //TODO: validar password con hash 

    const is_valid = await compare_password(password, response.password);

    console.log(is_valid)
    if(is_valid != true){
        res.status(400).json({message:"Usuario o password incorrectos"})
    }

    res.status(200).json({message:`todo ok`})
    return
}
catch(e){
    return
}

}





export default controller_auth