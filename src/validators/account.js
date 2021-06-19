
const path = require("path")
const login = require("../model/login");


const profileValidator = async(message)=>{
    //the number says whethered it is a bot, the user is registered and return it
    if(!message.mentions.users.first())
    {
        let userData = await login.findById(message.author.id);
        let result = userData !== null ? userData : 500;
        return result;
    } 
    if(message.mentions.users.first().bot)
    {
        return 707;
    }  
    if(message.mentions.users.first())
    {
        let userData = await login.findById(message.mentions.users.first().id);
        let json = {tag : true, db : userData, user : message.mentions.users.first()}
        let result = userData !== null ? json : 101;
        return result;
    }  

}

module.exports = {profileValidator}




