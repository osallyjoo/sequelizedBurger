"use strict";

module.exports = function(sequelize, DataTypes) {

  var Burger = sequelize.define("BurgerTable", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      default: false
    },
    date:{
      type: DataTypes.DATE,
      allowNull: true,
      default: DataTypes.NOW
    }
  }, {
  timestamps: false,
  freezeTableName: true,
}
  );
  return Burger;
};