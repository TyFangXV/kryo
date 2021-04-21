const discord = require('discord.js');
const fs = require('fs');
const prefix1 = 'ky';
const prefix2 ='kryo';
const client = new discord.Client();
client.command = new  discord.Collection();
const card = new discord.MessageEmbed();


//searches for file that end with .js
const commandFiles = fs.readdirSync('./command').filter(file => file.endsWith('.js'));

//sets every file that end with .js as a command
for(const file of commandFiles)
{
   for (const file of commandFiles) {
      const command = require(`./command/${file}`);

      client.command.set(command.name, command);
   }
}




//when the bot is ready its logs "bot online"
client.on('ready', ()=>{
    console.log('bot online');
})


client.on('message', message=>{
   //return null if the user is a bot or doesnt start with the prefix
   if(message.author.bot) return null;
   
   if(message.content.startsWith(prefix1))
   {
      console.log('ky')
      const command = message.content.slice(prefix1.length).trim(' ');
      const args = command.split(' ');
      if(command == 'hug')
      {
      client.command.get('hug').execute( message, discord)
      }

      if(command == 'anime-fact')
      {
       client.command.get('animeFact').execute(message,discord);
      }
      
      if(command == 'kiss')
      {
      client.command.get('kiss').execute(message,discord)
      }

      if(command == 'pet')
      {
      client.command.get('pet').execute(message,discord)
      }


      if(command == 'smug')
      {
      client.command.get('smug').execute(message,discord)
      }

      if(command == 'punch')
      {
      client.command.get('punch').execute(message,discord)
      }

      if(command == 'tell a joke')
      {
       client.command.get('joke').execute(message,discord)
      }

      if(command == "dog" || "fox" || "cat")
      {
         client.command.get('Animal').execute(message,discord,command)
      }

      if(command == "waifu")
      {
         client.command.get('waifu').execute(message,discord)  
      }
      console.log(command)
   }

   if(message.content.startsWith(prefix2))
   {
      const command = message.content.slice(prefix2.length).trim(' ');
      message.channel.send('yea what u want dumbass')
      console.log(command);
      if(command == "fact")
      {
         message.channel.send('yea what u want');         
      }
   }

})



client.login("ODE0NzQzNjcyNDE1MzIyMTUz.YDiTLA.zI9fvPvO1U4zY-Fa2ZSi_xge7BI")


