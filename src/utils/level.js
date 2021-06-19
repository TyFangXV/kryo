const login =  require("../model/login");


//level up
const levelUp = async(user) =>{
   const userData = await login.findById(user.id);
   if(userData == null ) return null;
   try{
       await login.findByIdAndUpdate(user.id, {
           message : userData.message + 1
       });
   }catch(e){
       console.log(e.message)
   }

}

module.exports = {levelUp}