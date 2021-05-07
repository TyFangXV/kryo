const cmd = require('../json/command.json');

module.exports = {
 "name" : "help",
 async execute(message,discord){
     let card = new discord.MessageEmbed();
     card
      .setColor('#fa078d')
      .setTitle('**Kryo help**')
      .setDescription(`if u like to add this bot to your server, click here https://bit.ly/3h3Z0tY`)
      cmd.command.forEach( async i => {
          card
          .addFields({name : i.name, value : i.command})
        });
         await message.author.send(card)
         await message.channel.send(`<@${message.author.id}> check your dm`)
 }
}


