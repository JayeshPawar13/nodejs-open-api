const { default: axios } = require('axios');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const { DogPicsController } = require('../controllers');

describe('test dog pics', () => {
  let sandbox = sinon.createSandbox();
  const resObj = { data: { message: 'abc.jpg', status: 'success' } };
  var dogPics = new DogPicsController();
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => (sandbox = sandbox.restore()));

  context('fetch dog pics', () => {
    it('should fetch random dog pics', async () => {
      sandbox.stub(axios, 'get').resolves(resObj);
      const actual = await dogPics.fetchRandomDogPic();
      expect(actual).to.be.equal(resObj.data.message);
    });

    it('should throw error while fetching random dog pics', async () => {
      let err = new Error('Something went wrong');
      sandbox.stub(axios, 'get').rejects(err);
      const actual = await dogPics.fetchRandomDogPic;
      try {
        actual();
      } catch (error) {
        expect(error).to.be.equal(err);
      }
    });
  });
});
