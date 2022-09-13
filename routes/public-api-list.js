var express = require('express');
const { PublicApiListController } = require('../controllers');
var router = express.Router();

const publicApiListController = new PublicApiListController();

/* GET all public api list */
router.get('/all', (req, res, next) => {
  // #swagger.tags = ['Public API List']
  // #swagger.description = 'To fetch all public api used in project'
  const response = publicApiListController.fetchAllPublicApis();
  res.json(response);
});

module.exports = router;
