const {default : axios} = require('axios');


const dogo = async()=>{
    const req = await axios.get('https://dog.ceo/api/breeds/image/random');

    if(req !== Error || undefined || null)
    {
        return req.data;
    }

    if(req == Error || undefined || null)
    {
        return 'err';
    }
}
 

const foxy = async()=> {
   const req = await axios.get('https://randomfox.ca/floof/');

   if(req !== Error || undefined || null)
   {
       return req.data;
   }

   if(req == Error || undefined || null)
   {
       return 'err';
   }  
}


const cat = async()=>{
    const req = await axios.get('https://api.thecatapi.com/v1/images/search');

    if(req !== Error || undefined || null)
    {
        return req.data;
    }
 
    if(req == Error || undefined || null)
    {
        return 'err';
    } 
}

module.exports = {cat, foxy, dogo}


