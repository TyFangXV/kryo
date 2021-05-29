require('dotenv').config();

const discord = require('discord.js');
const fs = require('fs');
const prefix1 = process.env.PREFIX;
const client = new discord.Client();
client.command = new  discord.Collection();


fs.readdir('./command', (err, folders)=>{
   
   folders.forEach((folder)=>{
      //searches for file that end with .js
      const commandFiles = fs.readdirSync(`./command/${folder}`).filter(file => file.endsWith('.js'));
      
      //sets every file that end with .js as a command
      for(const file of commandFiles)
      {
         for (const file of commandFiles) {
            const command = require(`./command/${folder}/${file}`);
      
            client.command.set(command.name, command);
         }
      }
   })


})





//when the bot is ready its logs "bot online"
client.on('ready', ()=>{
   client.guilds.cache.forEach(guild => {
      console.log(`${guild.name} | ${guild.id}`);
    })
   client.user.setActivity(" : 'ky help'",({type: "WATCHING"}));
    console.log('bot online');
})


client.on('message', message=>{
   //return null if the user is a bot or doesnt start with the prefix
   if(message.author.bot) return null;
   
   if(message.content.startsWith(prefix1))
   {
      const command = message.content.slice(prefix1.length).trim(' ').toLowerCase();
      const args = command.split(' ');

      client.command.get('question').execute(command, message);

      if(command == 'hug' || "kiss" || 'pet' || "punch" || "confuse" || "cry")
      {
      client.command.get('emote').execute(args, message, discord, )
      }

      if(command == 'anime-fact')
      {
       client.command.get('anime-fact').execute(message,discord);
      }

      if(command == 'tell a joke')
      {
       client.command.get('joke').execute(message,discord)
      }

      if(command == "dog" || "fox" || "cat")
      {
         client.command.get('animal').execute(message,discord,command)
      }

      if(command == "waifu")
      {
         client.command.get('waifu').execute(message,discord)  
      }

      
      if(command == "help")
      {
         client.command.get('help').execute(message,discord)
      }
      
      if(command == "meme")
      {
         client.command.get('meme').execute(message, discord);
      }
      
      if(command == "tell a pickup-line")
      {
        client.command.get("pickup_lines").execute(message) 
      }

      if(command == 'inspire')
      {
         client.command.get('quotes').execute(message, discord)
      }

      if(command == "tell a dad joke")
      {
         client.command.get("dad-joke").execute(message)
      }

      if(command == "give me an advice")
       {
          client.command.get('advice').execute(message)
       }

       if(command == "who is the dumbest")
        {
           message.channel.send(`its ${process.env.DUMB}`);
        }

      }



})







client.login(process.env.TOKEN);


