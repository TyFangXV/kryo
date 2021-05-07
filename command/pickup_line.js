const fx = require('../function/handler');

module.exports = {
 name : "pickup_lines",
 async execute(message){
   let data = await fx.pickup_line();
   await message.channel.send(`*${data}*`)
 }
};