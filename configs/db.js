const {sequelize, Sequelize} =require("sequelize")

const config =require("./database")["development"]

const sequelize =new Sequelize(config)

module.exports=sequelize;