const {default : axios} =  require('axios')
const animeFact = require("anime-facts")
const api = new animeFact("94c6b5fd12661c1f6fed3797de705467d7500eb69084");


const AnimeFact = async()=> {
    let data = await api.getFact();
    return data;
 }





const joke = async(type)=> {
  if(type == 'programming')
  {
      const req = await axios.get('https://official-joke-api.appspot.com/jokes/programming/random')

      if(req !== Error || undefined || null)
      {
          return req.data;
      }
      if(req == Error || undefined || null)
      {
          return 'err';
      }
  }
  
  //if it isnt a programming type it wiil return
  const req = await axios.get('https://official-joke-api.appspot.com/jokes/general/random')

  if(req !== Error || undefined || null)
  {
      return req.data;
  }
  if(req == Error || undefined || null)
  {
      return 'err';
  }

}

const meme = async()=>{
    let req = await axios.get('http://meme-api.herokuapp.com/gimme');
    
    if(req !== Error || undefined || null)
    {
        return req.data;
    }
    if(req == Error || undefined || null)
    {
        return 'err';
    }
}



module.exports = {AnimeFact, joke,meme}