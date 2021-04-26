const anix = require('./api/anix');
const fx = require('./api/general')
const animal = require('./api/animal');


const AnimeFact = async(card)=>{   
  let data = await fx.AnimeFact();
       card
         .setTitle('*kryo*')
         .setColor('#fa078d')
         .setDescription(data.fact)
      return card;
    }


    const Waifu = async(card)=>{
        let data = await anix.waifu();
        console.log(data);
        card
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
      }


    const AnimeGif = async(action,card)=>{ 
        let data = await anix.animeGif(action);
         card
          .setTitle('*kryo*')
          .setColor('#fa078d')
          .setImage(data.post.url)
        return card;
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
        let data = await fx.joke(type);
        let joke = `${data[0].setup}\n ${data[0].punchline}`
        return joke;
  }

  const meme = async(card)=>{
      let data = await fx.meme();
      card  
        .setImage(data.url)
      return card
  }



module.exports= {AnimeGif,AnimeFact,joke,dog,fox,cat,Waifu,meme}