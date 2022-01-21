const models = require('../models')

const getAllVillains = async (req, res) => {
  const villains = await models.villains.findAll()


  return response.send(villains)
}

const villainSlug = async (req, res) => {
const { slug } = req.params
const villainMatch = models.villains.findOne({ where: { slug }})

  return villainMatch
  ? response.send(villainMatch)
  : response.sendStatus(404)
}

const newVillain = async (req, res) => {
  const {name,movie,slug} = req.body

  if(!name||!movie||!slug) {
    return response.status(404).send('name, movie, slug required')
  }
  const  updatedVillain = await models.villains.create({name, movie, slug})

  return response.status(201).send(updatedVillain)
}
module.exports = {
  getAllVillains,
  villainSlug,
  newVillain,
}