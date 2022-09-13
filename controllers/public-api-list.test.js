const { default: axios } = require('axios');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const config = require('../config');
const { PublicApiListController } = require('../controllers');

describe('test public api list', () => {
  let sandbox = sinon.createSandbox();
  const resObj = config;

  var publicApi = new PublicApiListController();
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => (sandbox = sandbox.restore()));

  context('fetch public api list', () => {
    it('should fetch all public api used in project', () => {
      const actual = publicApi.fetchAllPublicApis();
      expect(actual).to.be.equal(resObj);
    });
  });
});
