const Sequelize = require('sequelize');
const villainsMod = require('./villains')

const connection = new Sequelize('disney', 'villains', 'vill4in$', {
  host: 'localhost', dialect:'mysql',
})

const villains = villainsMod(connection, Sequelize)

module.exports = { villains }