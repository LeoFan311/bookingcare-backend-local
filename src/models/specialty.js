'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }

    Specialty.init(
        {
            name: DataTypes.STRING,
            clinicId: DataTypes.INTEGER,
            image: DataTypes.BLOB('long'),
            descriptionHTML: DataTypes.TEXT('long'),
            descriptionMarkdown: DataTypes.TEXT('long'),
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            modelName: 'Specialty',
        },
    );

    return Specialty;
};
