const Sequelize = require('sequelize');

const sequelize = new Sequelize("person", "root", "hossein7175", {
    dialect:'mysql',
    host:"localhost"
})

module.exports = sequelize;
