const cmd = require('../json/command.json');

module.exports = {
 "name" : "help",
 async execute(message,discord){
     let card = new discord.MessageEmbed();
     card
      .setColor('#fa078d')
      .setTitle('**Kryo help**')
      cmd.command.forEach( async i => {
      card
          .addFields({name : i.name, value : i.command})
      });
         await message.author.send(card)
         await message.channel.send(`<@${message.author.id}> check your dm`)
 }
}


