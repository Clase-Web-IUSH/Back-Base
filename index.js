const express = require('express');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes')

const app = express();
const port = 3000;

app.use(express.json())
app.use('/users',userRoutes)

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


app.listen(port,()=>{
    console.log('Servidor Funcionando')
})