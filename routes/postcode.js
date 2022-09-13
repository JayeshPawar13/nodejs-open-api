var express = require('express');
const { PostCodeController } = require('../controllers');
var router = express.Router();

const postCodeController = new PostCodeController();

/* GET post code details */
router.get('/:postCode', async (req, res, next) => {
  // #swagger.tags = ['Post Code and Weather']
  // #swagger.description = 'To fetch a post code details'
  // #swagger.parameters['postCode'] = { description: 'Enter UK post code' , default: 'DN161EX'}
  try {
    const response = await postCodeController.fetchPostCodeDetails(
      req.params.postCode
    );
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
});

/* GET random joke */
router.get('/weather-info/:postCode', async (req, res, next) => {
  // #swagger.tags = ['Post Code and Weather']
  // #swagger.description = 'To fetch a weather details of specific post code using longitude and latitude'
  // #swagger.parameters['postCode'] = { description: 'Enter UK post code' , default: 'DN161EX'}
  try {
    const response = await postCodeController.fetchWeatherDetails(
      req.params.postCode
    );
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
