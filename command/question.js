module.exports = {
    name : "question",
    async execute(command,message){
       if(command == "hru")
          {
              await message.reply('im doing all right')
          } 
        else if(command == "wdy")
          {
              await message.reply("im check if the servers im in, called me")
          }
        else if(command == "whats your name")
          {
              await message.reply('Are u blind?')
          }
        else if(command == "gm")
          {
              await message.reply('gm. Hope u have a wonderful day')
          }
        else if(command == "give me happiness")
          {
              await message.reply('*kryo* prayed to have happiness in your life')
          } 
        else if(command = "are u gay")
          {
              message.reply('do i look gay to u')
          }  
    }
}
