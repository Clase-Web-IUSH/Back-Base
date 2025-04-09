const User = require('../models/User')

const getAllUsers = async (req,res)=>{
    try{
        const users = await User.findAll();
        res.json(users)

    }catch(error){
        res.status(500).json({error: error.message})
    }
};

const createUser = async (req,res)=>{
    try{
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const deleteUser = async (req,res)=>{
    try{
        const user = await User.findByPk(req.params.id)
        if(!user){
            return res.status(404).json({error: 'Usuario no encontrado'})
        }
        await user.destroy()
        res.json({message: 'Usuario eliminado'})
    }catch(error){
        res.status(500).json({error: error.message})
    }
}


module.exports = {
    getAllUsers,
    createUser,
    deleteUser
}