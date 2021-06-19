require("dotenv").config()

const fs = require('fs');
const path = require('path');
//let card = new discord.MessageEmbed();
module.exports = {
  name: path.basename(__filename).split(".")[0],
  async execute(message, discord, args) {
    let folders = fs.readdirSync(path.join(`${__dirname } ../../`));

        if(args == '')
           {
            let card = new discord.MessageEmbed();

            card 
            .setTitle("Kryo help center")
            .setColor("#fa078d")
            .setDescription("**Find the command u want by entering the genre**")
            .setFooter("@xzle", "https://www.dropbox.com/s/yop4k1op87x9o2d/logo.png?raw=1")
 
            folders.forEach((dir)=> {
              if(dir !== "help")
                {
                  card
                  .addField(dir, `${process.env.PREFIX} help ${dir}`, true)            
                }        
            });
    
            await message.channel.send(card)
           }

      folders.forEach((dir)=>{
        if(args == dir)
          {
            let folders = fs.readdirSync(path.join(`${__dirname } ../../${dir}`));
            let card = new discord.MessageEmbed();

            card 
            .setTitle("Kryo help center")
            .setColor("#fa078d")
            .setDescription("-----------*Enjoy*-----------")
            .setFooter("Kryo", "https://www.dropbox.com/s/yop4k1op87x9o2d/logo.png?raw=1")

          folders.forEach((command)=> {
                card
                .addField(command.split(".")[0], `${process.env.PREFIX} ${command.split(".")[0]}`, true)            
  
          });
  
             message.channel.send(card)
          }else
          {
            return;
          };
      })
  },
};
