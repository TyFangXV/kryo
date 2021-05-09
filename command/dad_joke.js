const fx = require('../function/handler');

module.exports = {
    name : "dad-joke",
    async execute(message)
    {
      let data = await fx.dad_joke();
      message.channel.send(data);
    }
}