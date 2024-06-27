const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("buahnaga", "root", "", {
  host: "127.0.0.1",
  dialect: "mysql",
  logging: false, // Set to true if you want to see SQL queries in the console
});

module.exports = sequelize;
