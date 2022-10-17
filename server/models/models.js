const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const testtable = sequelize.define('testtable',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    date: {type: DataTypes.DATE},
    name: {type:DataTypes.STRING},
    quantity:{type:DataTypes.INTEGER},
    distance:{type:DataTypes.INTEGER}
});

module.exports = testtable
