const { default: axios } = require('axios');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const { JokesController } = require('../controllers');

describe('test random jokes', () => {
  let sandbox = sinon.createSandbox();
  const resObj = {
    data: {
      error: false,
      category: 'Misc',
      type: 'single',
      joke: 'A neutron walks into a bar and asks for a price on a drink.\nThe barkeeper says: "For you... no charge!"',
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        racist: false,
        sexist: false,
        explicit: false,
      },
      id: 73,
      safe: true,
      lang: 'en',
    },
  };

  var jokes = new JokesController();
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => (sandbox = sandbox.restore()));

  context('fetch jokes', () => {
    it('should fetch random jokes', async () => {
      sandbox.stub(axios, 'get').resolves(resObj);
      const actual = await jokes.fetchJoke();
      expect(actual).to.be.equal(resObj);
    });

    it('should throw error while fetching random jokes', async () => {
      let err = new Error('Something went wrong');
      sandbox.stub(axios, 'get').rejects(err);
      const actual = await jokes.fetchJoke;
      try {
        actual();
      } catch (error) {
        expect(error).to.be.equal(err);
      }
    });
  });
});
