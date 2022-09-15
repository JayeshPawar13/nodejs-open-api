var express = require('express');
const { JokesController } = require('../controllers');
var router = express.Router();

const jokesController = new JokesController();

/* GET random joke */
router.get('/random', async (req, res) => {
  // #swagger.tags = ['Jokes']
  // #swagger.description = 'To fetch a random joke'
  try {
    const response = await jokesController.fetchJoke();
    res.json(response.data);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
