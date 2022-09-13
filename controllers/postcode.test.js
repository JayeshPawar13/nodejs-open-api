const { default: axios } = require('axios');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const { PostCodeController } = require('../controllers');

describe('test post code details', () => {
  let sandbox = sinon.createSandbox();
  const postCodeResObj = {
    data: {
      status: 200,
      result: {
        postcode: 'DN16 1EX',
        quality: 1,
        eastings: 490190,
        northings: 410183,
        country: 'England',
        nhs_ha: 'Yorkshire and the Humber',
        longitude: -0.639228,
        latitude: 53.580494,
        european_electoral_region: 'Yorkshire and The Humber',
        primary_care_trust: 'North Lincolnshire',
        region: 'Yorkshire and The Humber',
        lsoa: 'North Lincolnshire 010C',
        msoa: 'North Lincolnshire 010',
        incode: '1EX',
        outcode: 'DN16',
        parliamentary_constituency: 'Scunthorpe',
        admin_district: 'North Lincolnshire',
        parish: 'North Lincolnshire, unparished area',
        admin_county: null,
        admin_ward: 'Frodingham',
        ced: null,
        ccg: 'NHS North Lincolnshire',
        nuts: 'North and North East Lincolnshire',
        codes: {
          admin_district: 'E06000013',
          admin_county: 'E99999999',
          admin_ward: 'E05001741',
          parish: 'E43000012',
          parliamentary_constituency: 'E14000914',
          ccg: 'E38000122',
          ccg_id: '03K',
          ced: 'E99999999',
          nuts: 'TLE13',
          lsoa: 'E01013313',
          msoa: 'E02002758',
          lau2: 'E06000013',
        },
      },
    },
  };
  const weatherResObj = {
    data: {
      product: 'astro',
      init: '2022091300',
      dataseries: [
        {
          timepoint: 3,
          cloudcover: 3,
          seeing: 6,
          transparency: 5,
          lifted_index: 2,
          rh2m: 11,
          wind10m: {
            direction: 'SW',
            speed: 3,
          },
          temp2m: 24,
          prec_type: 'none',
        },
      ],
    },
  };

  var postCode = new PostCodeController();
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => (sandbox = sandbox.restore()));

  context('fetch post code details', () => {
    it('should fetch post code details based on post code', async () => {
      sandbox.stub(axios, 'get').resolves(postCodeResObj);
      const actual = await postCode.fetchPostCodeDetails();
      expect(actual).to.be.equal(postCodeResObj);
    });

    it('should throw error while fetching post code details', async () => {
      let err = new Error('Something went wrong');
      sandbox.stub(axios, 'get').rejects(err);
      const actual = await postCode.fetchPostCodeDetails;
      try {
        actual();
      } catch (error) {
        expect(error).to.be.equal(err);
      }
    });
  });

  context('fetch weather details', () => {
    it('should fetch weather details based on post code', async () => {
      sandbox.stub(axios, 'get').resolves(weatherResObj);
      sandbox.stub(postCode, 'fetchPostCodeDetails').resolves(postCodeResObj);
      const actual = await postCode.fetchWeatherDetails();
      expect(actual).to.be.equal(weatherResObj);
    });

    it('should throw error while fetching weather details based on post code', async () => {
      let err = new Error('Something went wrong');
      sandbox.stub(axios, 'get').rejects(err);
      const actual = await postCode.fetchWeatherDetails;
      try {
        actual();
      } catch (error) {
        expect(error).to.be.equal(err);
      }
    });
  });
});
