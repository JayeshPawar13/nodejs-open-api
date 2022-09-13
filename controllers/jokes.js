const { default: axios } = require('axios');
const config = require('../config');

class JokesController {
  async fetchJoke() {
    try {
      const response = await axios.get(config.JOKES_API);
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = JokesController;
