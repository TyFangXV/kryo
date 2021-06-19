const path = require("path")
const {genderValidation}  =  require("../../validators/gender")
const login = require("../../model/login");
//sets setting for account
module.exports = {
  name: path.basename(__filename).split(".")[0],
  status : "dev",
  async execute(message, discord, args) { 
   let userData = await login.findById(message.author.id);
   let genderValid = genderValidation(args[1]);
   if(userData.gender !== "none") message.channel.send("this setting was already applied to your account")
   if(genderValid !== "valid") message.channel.send("error")
   if(args[0] == "gender" && genderValid == "valid")
     {
       
       try{
           await login.findByIdAndUpdate(message.author.id, {
               gender : args[1]
           }) 
   
           message.channel.send("settings applied")
       }catch(e){
        message.channel.send(`error : ${e.message}`)
       }
     }
  },
};
