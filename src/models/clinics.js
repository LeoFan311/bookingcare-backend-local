'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Clinic.init(
        {
            name: DataTypes.STRING,
            provinceId: DataTypes.STRING,
            provinceName: DataTypes.STRING,
            address: DataTypes.STRING,
            image: DataTypes.BLOB('long'),
            descriptionHTML: DataTypes.TEXT('long'),
            descriptionMarkdown: DataTypes.TEXT('long'),

            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Clinic',
        },
    );
    return Clinic;
};
