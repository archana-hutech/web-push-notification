const db = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Subscriber = sequelize.define(
    "subscribers",
    {
      id: {
        type: db.DataTypes.UUID,
        primaryKey: true,
        defaultValue: db.DataTypes.UUIDV4,
      },
      endpoint: {
        type: db.DataTypes.STRING,
        // unique: true, // add unique constraint
        // allowNull: false,
      },
      keys: {
        type: db.DataTypes.JSON,
        allowNull: false,
      },
    },
    { tableName: "subscribers" }
  );

  return Subscriber;
};
