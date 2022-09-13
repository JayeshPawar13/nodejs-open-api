const { default: axios } = require('axios');
const config = require('../config');
class DogPicsController {
  async fetchRandomDogPic() {
    try {
      const response = await axios.get(config.DOGS_PIC_API);
      return response.data.message;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = DogPicsController;
