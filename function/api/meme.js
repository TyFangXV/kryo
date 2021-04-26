const axios = require('axios').default;


const meme = async()=>{
    try {
      let data = await axios.get('http://meme-api.herokuapp.com/gimme');
      return data;
    } catch (error) {
        return error.message;
    }
}

module.exports = {meme}