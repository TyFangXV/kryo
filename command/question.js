const reply = require("../json/text.json");
const math = require('mathjs')

//parser
const parser = (data)=>{
  let stringJson = JSON.stringify(data);
  let json  = JSON.parse(stringJson);
  return json;
}

const getRandomDataPoint = (data)=>{
  let stringJson = JSON.stringify(data);
  let array  = JSON.parse(stringJson);
  let min = 0, max = array.length;
  let num = math.randomInt(min, max);
  return array[num];
}

module.exports = {
    name : "question",
    async execute(command,message){
         //command-1
         if(command == "hru")
          {
            let text = getRandomDataPoint(reply["hru-reply"])
            await message.reply(`im doing all right \n ${text}`)
          }

        //command-2
         if(command == "wdy")
          {
            let text = getRandomDataPoint(reply.status)
            await message.reply(text)
          }

         //command-3
         if(command == "gm")
          {
            let text = getRandomDataPoint(reply.gm)
            await message.reply(text)
          }

        //command-4
         if(command == "give me happiness")
          {
            let text = getRandomDataPoint(reply.happiness)
            await message.reply(text)
          } 
         
        //command-5
         if(command == "gn")
           {
            let text = getRandomDataPoint(reply.gn)
            await message.reply(text)
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
           
         if(command == "do u think im worth living")  
           {
             
           }

        else
        {
          return null
        }

    }
}
