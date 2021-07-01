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

//first gets the array of character then check if the "search" matches one of the el of the array 
//if the "search" doesnt match any el then it would return a 404 error 
//if it does match then it would return the data of that legend that is searched up
const get_charcter = async(search)=>{
    try {
        let characters  = await (await axios.get(`${baseURL}/characters/`));
        characters.data.forEach(legends => {if(search !== legends) return "404";});
        let legendData  = await (await axios.get(`${baseURL}/characters/${search}`)).data;
        data = {
            info : legendData,
            Image : [`${baseURL}/characters/${search}/icon`,`${baseURL}/characters/${search}/portrait`]
        }
        return data;
    } catch (error) {
        return "404" 
    }
}



module.exports = {get_random_character, get_charcter}