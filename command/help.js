const cmd = require('../json/command.json');

const execute = (message,discord) => {
    let card = new discord.MessageEmbed();
    card
     .setTitle('**Kryo help**')
     cmd.command.forEach( async i => {
     card
         .addFields({name : i.name, value : i.command})
        await message.author.send(card)
    });
}

