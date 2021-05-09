const reply = require("../json/text.json");
const math = require('mathjs')

//parser
const parser = (data)=>{
  let stringJson = JSON.stringify(data);
  let json  = JSON.parse(stringJson);
  return json;
}

let arr = ["!23123"]
const randomDataPoint = (array)=>{
  let min = 0, max = array.length;
  let num = math.randomInt(min, max);
  return num;
}

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
             let text = parser(reply.status);
             let num = randomDataPoint(text);
             console.log(num)
              await message.reply(text[num])
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
             await message.reply("Yes")
           }  

        else
        {
          return null
        }

    }
}
