const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'backejemplo',
    'root',
    'admin$1234',{
        host: 'localhost',
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(()=>{
        console.log('Conexion establecida')
    })
    .catch(err=>{
        console.error('No se pudo conectar',err)
    })

    module.exports = sequelize;