const {describe, it} = require('mocha')
const chai = require('chai')
const {createSandbox} = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {getAllVillains, villainSlug, newVillain } = require('../../mocks/villains')
const {mockVillains, mockVillain, postVillainData, postVillainRes} = require('../../controllers/villains')


chai.use(sinonChai)

const { expect } = chai

describe('controllers - villains', () => {
  let sandbox
  let response
  let stubSend
  let stubFindOne
  let stubFindAll
  let stubSendStatus

  before(() => {
    sandbox = createSandbox()

   stubSend  = sandbox.stub()
   stubSendStatus = sandbox.stub()

   stubFindAll = sandbox.stub(models.villains, 'findAll')
   stubFindOne = sandbox.stub(models.villains, 'findOne')

   response = {
     send: stubSend,
     send: stubSendStatus,
   }
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getAllVillains', () => {
    it('gets a list of villains from db and send JSON using response.send()', async () => {
      stubFindAll.returns(mockVillains)
      
      await getAllVillains({}, response)

      expect(stubFindAll).to.have.been.callCount(1)
      expect(stubSend).to.have.been.calledWith(mockVillains)
    })
})

  describe('villainSlug', () => {
    it('retrieves the villain connect to slug from the db and sends json using response.send()', async () => {})
      stubFindOne.returns(mockVillain)
      const request = {params: {slug: 'jafar'}}
      
      await villainBySlug(request, response)

      expect(stubFindOne).to.have.been.calledWith({ where: { slug: 'jafar'} })
      expect(stubSend).to.have.been.calledWith(mockVillain)
  })
 
  describe('newVillain', () => {
    it('creates new villain db record from data', async() => {
        stubbedCreate.returns(postVillainRes)
        const request = {body: postVillainData}

        await newVillain(request, response)

        expect(stubbedCreate).to.have.been.calledWith(postVillainData)
    })
  })
})