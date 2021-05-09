const reply = require("../json/text.json");


module.exports = {
    name : "question",
    async execute(command,message){
         //command-1
         if(command == "hru")
          {
              await message.reply('im doing all right')
          }

        //command-2
         if(command == "wdy")
          {
              await message.reply("im check if the servers im in, called me")
          }

         //command-3
         if(command == "gm")
          {
              await message.reply('gm sunshine. Hope u have a wonderful day')
          }

        //command-4
         if(command == "give me happiness")
          {
              await message.reply('*kryo* wished for you to be happy with your life.')
          } 
         
         //command-8
         if(command = "are u gay")
          {
              message.reply('do i look gay to u')
          }  


        //command-5
         if(command == "gn")
           {
             await message.reply("gn. sleep well")
           }  

         //command-6 
         if(command == "hi")
           {
             await message.reply("hi")
           }
         
         //command-7
         if(command == "are u single")
           {
             await message.reply("nah im taken")
           }  

        else
        {
          return null
        }

    }
}
