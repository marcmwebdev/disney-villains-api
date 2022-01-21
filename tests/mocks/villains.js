const mockVillains = [{
  id:1,
  name: 'Captain Hook',
  movie: 'Peter Pan',
  slug: 'captain-hook',
}, {
  id:2,
  name: 'Cruella de Vil',
  movie: 'One Hundred and One Dalmatians',
  slug: 'cruella-de-vil',
}]

const mockVillain = {
  id: 3,
  name: 'Jafar',
  movie: 'Aladdin',
  slug: 'jafar',
}

const postVillainData = {
  name: 'Red Skull',
  movie: 'Captain America: The First Avenger',
  slug : 'red-skull',

}
const postVillainRes = {  
  id: 4,
  name: 'Red Skull',
  movie: 'Captain America: The First Avenger',
  slug : 'red-skull',
  
}

module.exports = {
  mockVillains,
  mockVillain,
  postVillainData,
  postVillainRes,
}