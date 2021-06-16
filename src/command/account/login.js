const fx = require("../../function/handler");
const path = require("path")
const login = require("../../model/login");


module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message) {
     const data = await message.author;
     const preMadeUserData = await login.findById(data.id);
     if(preMadeUserData !== null) message.channel.send("Your already logged in");
     if(preMadeUserData == null)
     {
       try {
         let user =  new login({
          _id : parseInt(data.id),
          incrementValue : 0.15,
          username : data.username,
          money : 100,
          level : 0.00,
         })
         user.save();
         await message.channel.send("account made");
       } catch (error) {
         message.channel.send(error.message)
       }
     }
  },
};
