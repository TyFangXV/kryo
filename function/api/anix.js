const { default: axios } = require("axios");
const {randomInt} = require('mathjs');

const GetRandomDataPoint = (data)=>{
   let min = 0;
   let max = data.quantity;
   let number = randomInt(min, max);
   let dataPoint = data.data[number];
   return dataPoint;
};


//animu-waifu
const waifu = async()=> {
    //takes data from the url
    const req = await axios.get('https://animu.p.rapidapi.com/waifus',{ 
        //passes the headers in for the url
         headers : {
      "x-rapidapi-key": "0dad1a668cmshc12797096b06beep16df1ejsn7fb6e4106e1f",
      "x-rapidapi-host": "animu.p.rapidapi.com",
      "useQueryString": true }});
      
      //if the req doesnt return Error, undefined and null
      if(req !== Error || undefined || null)
      {
          return req.data;
      }
      
      //if the req doesnt return Error, undefined and null
      if(req == Error || undefined || null)
      {
          return 'err';
      }
 }

//kryx
const animeGif = async(action)=> {
    //takes the data from the url 
    const req = await axios.get(`https://kryx-api-kryo-v1.kryx.workers.dev/action?action=${action}`,{ 
        //passes the headers in for the url    
        headers : {
          "token" : "txv.tyfang.kryx"
         }});
    //if the req doesnt return Error, undefined and null
     if(req !== Error || undefined || null)
     {
         let emote = req.data;
         let post = GetRandomDataPoint(emote);
         return post;
     }

     //if the req doesnt return Error, undefined and null
     if(req == Error || undefined || null)
     {
         return 'err';
     }
}




 

module.exports = {animeGif, waifu}


