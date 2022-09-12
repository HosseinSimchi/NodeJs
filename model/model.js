const {DataTypes} = require('sequelize');
const sequelize = require('../utils/database');

const tablePerson = sequelize.define("Persons", {
    id:{
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true
    },
    name:{
        type : DataTypes.STRING,
        allowNull: true
    }
});

module.exports = tablePerson;


