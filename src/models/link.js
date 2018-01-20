'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Link', {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: 'ID'
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'link token'
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'link code'
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'sharer'
    },
    status: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 1,
      comment: '1-active, 2-suspended, 3-removed'
    }
  }, {
    tableName: 't_link',
    comment: 'link table'
  });
};
