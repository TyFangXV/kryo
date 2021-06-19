const anix = require("./api/anix");
const fx = require("./api/general");
const animal = require("./api/animal");

const AnimeFact = async (card) => {
  let data = await fx.AnimeFact();
  card.setTitle("*kryo*").setColor("#fa078d").setDescription(`*${data.fact}*`);
  return card;
};

const Waifu = async (card) => {
  let data = await anix.waifu();
  card
    .setColor("#fa078d")
    .setThumbnail(data.anime_image)
    .setFooter(data.id, data.character_image)
    .setTitle(data.origin)
    .setImage(data.character_image)
    .setDescription(data.desc)
    .addFields(
      {
        name: "name",
        value: data.name,
        inline: true,
      },
      {
        name: "gender",
        value: data.gender,
        inline: true,
      },

    );
  return card;
};

const AnimeGif = async (action, card) => {
  let data = await anix.animeGif(action);
  card.setTitle("*kryo*").setColor("#fa078d").setImage(data.post.url);
  return card;
};

const cat = async (card) => {
  let data = await animal.cat();
  card.setColor("#fa078d").setImage(data[0].url);
  return card;
};

const fox = async (card) => {
  let data = await animal.foxy();
  card.setColor("#fa078d").setImage(data.image);
  return card;
};

const dog = async (card) => {
  let data = await animal.dogo();
  card.setColor("#fa078d").setImage(data.message);
  return card;
};

const joke = async (type) => {
  let data = await fx.joke(type);
  let joke = `${data[0].setup}\n ${data[0].punchline}`;
  return joke;
};

const meme = async (card) => {
  let data = await fx.meme();
  card.setImage(data.url);
  return card;
};

const pickup_line = async () => {
  let data = await fx.pickup_line();
  return data.data;
};

const dad_joke = async () => {
  let data = await fx.dad_joke();
  return data.joke;
};

const advice = async () => {
  let data = await fx.advice();
  return data.slip.advice;
};

const bird = async () => {
  let data = await animal.bird();
  return data;
};

module.exports = {
  AnimeGif,
  AnimeFact,
  joke,
  dog,
  fox,
  cat,
  Waifu,
  meme,
  pickup_line,
  dad_joke,
  advice,
  bird,
};
