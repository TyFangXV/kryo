const quotes = require('inspirational-quotes');

module.exports = {
    name : "quotes",
 async execute(message, discord){
    let card =  new discord.MessageEmbed();
    card 
     .setColor('#fa078d')
     .setTitle(quotes.getRandomQuote())

    await message.channel.send(card) 
 }
}