const {Sequelize} = require('sequelize')

// const devCionfig = {
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         dialect: 'postgres',
//         host: process.env.DB_HOST,
//         port: process.env.DB_PORT
//     }
// }

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.
DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

const proConfig =  process.env.DATABASE_URL //heroku addons

module.exports = new Sequelize(
     process.env.NODE_ENV === 'production' ? proConfig : devConfig

);

