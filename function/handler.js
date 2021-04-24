const anix = require('./api/anix');
const fx = require('./api/general')
const dcord = require('discord.js');
const cards = new dcord.MessageEmbed();
const animal = require('./api/animal');
const { format } = require('mathjs');


    const AnimeFact = async(card)=>{
   try{      
  let data = await fx.AnimeFact();
       card
         .setTitle('*kryo*')
         .setColor('#fa078d')
         .setDescription(data.fact)
      return card;
    }catch(error)
    {
      return error.message;
    }
    }


    const Waifu = async(card)=>{
      try {   
        let data = await anix.waifu();
        card
         .setTitle(data.names.en)
         .setColor('#fa078d')
         .addFields(
           {
           name : data.from.type,
           value : data.from.name,
          }
         )
         .setImage(data.images[0])
         .addFields(
          {
            name : 'Favorite',
            value : `✨:${data.statistics.fav}`,
            inline : true
          },
          {
            name : 'love',
            value : `❤️:${data.statistics.love}`,
            inline : true
          },
          {
            name : 'hate',
            value : `😡:${data.statistics.hate}`,
            inline : true
          },
          {
            name : 'upvote',
            value : `⬆️:${data.statistics.upvote}`,
            inline : true
          },
          {
            name : 'downvote',
            value : `⬇️:${data.statistics.downvote}`,
            inline : true
          }
        )
        return card; 
      } catch (error) {
        return error.message;
      }
    }


    const AnimeGif = async(action,card)=>{
      try {  
        let data = await anix.animeGif(action);
         card
          .setTitle('*kryo*')
          .setColor('#fa078d')
          .setImage(data.post.url)
        return card;
      } catch (error) {
         return error.message;
      }
    }



    const cat = async(card)=>{
       let data = await animal.cat();
       card 
        .setColor('#fa078d')
         .setImage(data[0].url)
       return card;
    }

    const fox = async(card)=>{
        let data = await animal.foxy();
        card 
         .setColor('#fa078d')
         .setImage(data.image)
        return card;
    }

    const dog = async(card)=>{
        let data = await animal.dogo();
        card 
          .setColor('#fa078d')
          .setImage(data.message)         
        return card;
    }





    const joke = async(type)=>{
      try {
        let data = await fx.joke(type);
        let joke = `${data[0].setup}\n ${data[0].punchline}`
        return joke;
      } catch (error) 
      {
        console.log(error);
        return 'err'
      }
  }



module.exports= {AnimeGif,AnimeFact,joke,dog,fox,cat,Waifu}