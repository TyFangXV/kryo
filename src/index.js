require("dotenv").config();
const discord = require("discord.js");
const fs = require("fs");
const path = require("path")
const prefix = process.env.PREFIX;
const client = new discord.Client();
client.command = new discord.Collection();


//#region  bot-command-initialization 

fs.readdir("./src/command", (err, folders) => {
  if(err)
    {
       console.log(err.message)
    }
  folders.forEach((folder) => {
    //searches for file that end with .js
    const commandFiles = fs.readdirSync(`./src/command/${folder}`).filter((file) => file.endsWith(".js"));

    //sets every file that end with .js as a command

      for (const file of commandFiles) 
      {
        const command = require(`./command/${folder}/${file}`);
        client.command.set(command.name, command, command.status);
      }

  });

});

//#endregion


//#region  discord-bot


//#region discord-bot start

//when the bot is ready its logs "bot online"
client.on("ready", () => {

  client.guilds.cache.forEach((guild) => {
      console.log(`${guild.name} | ${guild.id}`);
  });

      client.user.setActivity(" : 'ky help'", { type: "WATCHING" });
      console.log("bot online");
});

//#endregion


//#region discord-command-handler
client.on("message", (message) => {
   //return null if the user is a bot or doesnt start with the prefix
   if (message.author.bot) return null;

   if (message.content.startsWith(prefix)) 
   {

      //trim the prefix out of the message to get the command and then convert any uppercase letter to lowercase
      const command = message.content.slice(prefix.length).trim(" ").toLowerCase().split(" ")[0];
      const args = message.content.slice(prefix.length).trim(" ").toLowerCase().slice(command.length).replace(/\s/g,'');

      let skip = false;

      fs.readdir("./src/command", (err, folders) => {

         folders.forEach((folder) => {
               //loops through the folder and get all the files that end with js
               const commandFiles = fs.readdirSync(`./src/command/${folder}`).filter((file) => file.endsWith(".js"));

               //loops through all the files and if the name of the file matches the command then execute that command
               if (!skip) {
                     for (const file of commandFiles) 
                     {
                        if (file.split(".")[0] == command) 
                        {
                           try {                      
                            if(client.command.get(command).status !== "dev")   
                             {
                                client.command.get(command).execute(message, discord, args);
                                skip = true;
                             }else
                             {
                                message.channel.send("The command is still under development")
                                skip = true;
                             }
                           } catch (error) {
                              message.channel.send(`error : ${error.message}`);
                              skip = true;
                           }
                        }
                     }

               } else 
               {
                  return;
               }
         });

         
      });

      skip = false;
   }
});
 //#endregion

 client.login(process.env.TOKEN);
//#endregion
