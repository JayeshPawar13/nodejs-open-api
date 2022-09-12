const { default: axios } = require('axios');

class PublicApiList {
  async fetchAllPublicApis() {
    try {
      const response = await axios.get('https://api.publicapis.org/entries');
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = PublicApiList;
