const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user");
const Product = require("./product");

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = User;
db.Product = Product;

module.exports = db;
