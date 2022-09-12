var express = require('express');
const { PublicApiListController } = require('../controllers');
var router = express.Router();

const publicApiListController = new PublicApiListController();

/* GET all public api list */
router.get('/all', async (req, res, next) => {
  // #swagger.tags = ['Public API List']
  // #swagger.description = 'To fetch all public api'
  const response = await publicApiListController.fetchAllPublicApis();
  res.json(response.data);
});

module.exports = router;
