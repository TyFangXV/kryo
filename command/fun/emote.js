const fx = require('../../function/handler');
module.exports = {
 name : "emote",
async execute(args,message,discord){
      let card = new discord.MessageEmbed();  
       let data = await fx.AnimeGif(args[0],card);
       await message.channel.send(data);
}
}
