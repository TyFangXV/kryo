const { default: axios } = require("axios");
const nekoLife = require('nekos.life') 
const {randomInt} = require('mathjs');
const nk = new nekoLife().sfw;

const GetRandomDataPoint = (data)=>{
   let min = 0;
   let max = data.quantity;
   let number = randomInt(min, max);
   let dataPoint = data.data[number];
   return dataPoint;
};


//animu-waifu
const waifu = async()=> {
        var options = {
            method: 'GET',
            url: 'https://animu.p.rapidapi.com/waifu',
            headers: {
              auth: '94c6b5fd12661c1f6fed3797de705467d7500eb69084',
              'x-rapidapi-key': '0dad1a668cmshc12797096b06beep16df1ejsn7fb6e4106e1f',
              'x-rapidapi-host': 'animu.p.rapidapi.com'
            }
          };
          try {
            let req = await axios.request(options);
            return req.data   
          } catch (error) {
            return error;
          }
}


const waifu2 = async()=>{
    try {
        const req = await axios.get('https://nekos.life/api/v2/img/waifu');
        return req.data
    } catch (error) {
    return error
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

module.exports = {animeGif, waifu,waifu2}


