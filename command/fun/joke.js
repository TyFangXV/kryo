const fx = require('../../function/handler');

module.exports = {
name : "joke",      
async execute(message,discord){
       let data = await fx.joke();
       await message.channel.send(data);
}
}



