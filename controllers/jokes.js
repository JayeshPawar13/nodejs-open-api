const { default: axios } = require('axios');

class JokesController {
  async fetchJoke() {
    try {
      const response = await axios.get(
        'https://v2.jokeapi.dev/joke/Any?safe-mode'
      );
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = JokesController;
