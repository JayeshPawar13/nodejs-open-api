const { default: axios } = require('axios');
const config = require('../config');

class PublicApiListController {
  fetchAllPublicApis() {
    const response = config;
    return response;
  }
}

module.exports = PublicApiListController;
