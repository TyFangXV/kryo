require("dotenv").config()
const path = require("path")
const {profileValidator} = require("../../validators/account")
//makes profile
module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dep",
  async execute(message, discord,args ,client) {
    let card = new discord.MessageEmbed();
    let status = "ok";
    const ValidatorResult = await profileValidator(message);
    //checks if the user is registered and a bot 
    if(ValidatorResult === 707) {message.channel.send("😑 Im lazy to scan that profile 😑"); status = "invalid"}
    else if(ValidatorResult === 101){ message.channel.send("🔒 User not registered 🔒"); status = "invalid"}
    else if(ValidatorResult === 500){ message.channel.send("👤 Not logged in 👤 "); status = "invalid"}
    //if its an actual user who is logged in it would show the profile data
    const ReqUserData = ValidatorResult;
    if(status !== "invalid" && ReqUserData.tag)
      {
        try {
          card
            .setColor("#fa078d")
            .setTitle(`*****${ReqUserData.user.username} profile*****`)
            .setThumbnail(ReqUserData.user.avatarURL())
            .addField("name", ReqUserData.user.username, true)
            .addField("money", ReqUserData.db.money, true)
            .addField("level", ReqUserData.db.message / 100, true)
         await message.channel.send(card) 
          
        } catch (e) {
          console.log(e)
        }
      }
      else if(status !== "invalid" && ReqUserData.tag == null)
      {
        try {
          card
            .setColor("#fa078d")
            .setTitle(`*****${ReqUserData.username} profile*****`)
            .setThumbnail(message.author.avatarURL())
            .addField("name", message.author.username, true)
            .addField("money", ReqUserData.money, true)
            .addField("level", ReqUserData.message / 100, true)
         await message.channel.send(card)     
        } catch (e) {
           console.log(e)
        }
      }

      else{
        return null;
      }
      
  },
};
