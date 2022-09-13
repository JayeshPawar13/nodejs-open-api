const { default: axios } = require('axios');
const config = require('../config');

class PostCodeController {
  async fetchPostCodeDetails(postCode) {
    try {
      const postCodeDetails = await axios.get(config.POSTCODE_API + postCode);
      return postCodeDetails;
    } catch (error) {
      throw error;
    }
  }

  async fetchWeatherDetails(postCode) {
    try {
      const postCodeDetails = await this.fetchPostCodeDetails(postCode);
      const weatherDetails = await axios.get(
        `${config.WEATHER_API}?lon=${postCodeDetails.data.longitude}&lat=${postCodeDetails.data.latitude}&ac=0&unit=metric&output=json&tzshift=0`
      );
      return weatherDetails;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PostCodeController;
