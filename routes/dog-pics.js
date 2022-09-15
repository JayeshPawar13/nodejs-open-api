var express = require('express');
const { DogPicsController } = require('../controllers');
var router = express.Router();

const dogPicsController = new DogPicsController();

/* GET dog pics */
router.get('/random', async (req, res) => {
  // #swagger.tags = ['Dogs']
  // #swagger.description = 'To fetch a random dog pic'
  try {
    const response = await dogPicsController.fetchRandomDogPic();
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
