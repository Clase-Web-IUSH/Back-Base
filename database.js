const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'railway',
    'root',
    'RxsITIAJXxnQCTCCqroVNsFKraKngHPj',{
        host: 'shortline.proxy.rlwy.net',
        dialect: 'mysql',
        port: 47453
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