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
      try {   
        let data = await anix.waifu();
        cards
         .setTitle(data.names.en)
         .setImage(`"${data.images[0]}"`)
        console.log(data.images[0]);
        return card; 
      } catch (error) {
        console.log(error);
        return 'error';
      }
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





    const joke = async(type,card)=>{
      try {
        let data = await fx.joke(type);
         card
          .setTitle(data.setup)
          .setFooter(data.punchline)
        return card;
      } catch (error) {
        return 'err'
      }
  }



module.exports= {AnimeGif,AnimeFact,joke,dog,fox,cat,Waifu}