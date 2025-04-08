const express = require('express');
const sequelize = require('./database');
const User = require('./models/User')

const app = express();
const port = 3000;

app.use(express.json())

sequelize.sync()
    .then(()=>{
        console.log("Modelos sincronizados")
    })
    .catch(err=>{
        console.error("Error al sincronizar los modelos:",err)
    })

app.get('/',(req,res)=>{
    res.send('Hola desde la API')
})

app.post('/users', async (req,res)=>{
    try{
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(newUser)

    }catch(error){
        res.status(400).json({error: error.message})
    }
})

app.listen(port,()=>{
    console.log('Servidor Funcionando')
})