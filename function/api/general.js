const {default : axios} =  require('axios')

const AnimeFact = async()=> {
    const req = await axios.get('https://animu.p.rapidapi.com/fact',{ 
         headers : {
      "x-rapidapi-key": "0dad1a668cmshc12797096b06beep16df1ejsn7fb6e4106e1f",
      "x-rapidapi-host": "animu.p.rapidapi.com",
      "useQueryString": true }});
 
      if(req !== Error || undefined || null)
      {
          return req.data;
      }
      if(req == Error || undefined || null)
      {
          return 'err';
      }
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

module.exports = {AnimeFact, joke}