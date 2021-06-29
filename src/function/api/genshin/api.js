const axios = require("axios").default;
const {randomInt} = require("mathjs")
const baseURL = "https://api.genshin.dev";

const GetRandomDataPoint = (data) => {
    let min = 0;
    let max = data.length;
    let number = randomInt(min, max);
    let dataPoint = data[number];
    return dataPoint;
  };
  


const get_random_character = async()=>{
    let characters  = await (await axios.get(`${baseURL}/characters/`)).data;
    let legend = GetRandomDataPoint(characters);
    let legendData  = await (await axios.get(`${baseURL}/characters/${legend}`)).data;
    data = {
        info : legendData,
        Image : [`${baseURL}/characters/${legend}/icon`,`${baseURL}/characters/${legend}/portrait`]
    }
    return data;
}


const get_charcter = async(search)=>{
    //checks if the character searched up is there in the database
    let characters  = await (await axios.get(`${baseURL}/characters/`)).data;
    characters.forEach(legends => {
        if(search !== legends) return 404;
    });
    let legendData  = await (await axios.get(`${baseURL}/characters/${legend}`)).data;
    data = {
        info : legendData,
        Image : [`${baseURL}/characters/${legendData.name}/icon`,`${baseURL}/characters/${legendData.name}/portrait`]
    }
    return data;
}



module.exports = {get_random_character}