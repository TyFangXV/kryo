const { default: axios } = require("axios");
const { randomInt } = require("mathjs");
const anix = require("acb-api")
const GetRandomDataPoint = (data) => {
  let min = 0;
  let max = data.quantity;
  let number = randomInt(min, max);
  let dataPoint = data.data[number];
  return dataPoint;
};

//animu-waifu
const animeCharacter = async () => {
  try {
    const data = await anix.get_random_character();
    return data;
  } catch (error) {
    console.log(error)
  }
};

const animeCharBySearch = async(search)=>{
  try {
    const data = await anix.get_character_by_search(search);
    return data;
  } catch (error) {
    console.log(error);
  }
}



//kryx
const animeGif = async (action) => {
  //takes the data from the url
  const req = await axios.get(
    `https://kryx-api-kryo-v1.kryx.workers.dev/action?action=${action}`,
    {
      //passes the headers in for the url
      headers: {
        token: "txv.tyfang.kryx",
      },
    }
  );
  //if the req doesnt return Error, undefined and null
  if (req !== Error || undefined || null) {
    let emote = req.data;
    let post = GetRandomDataPoint(emote);
    return post;
  }

  //if the req doesnt return Error, undefined and null
  if (req == Error || undefined || null) {
    return "err";
  }
};

module.exports = { animeGif, animeCharBySearch, animeCharacter};
