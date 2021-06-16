const login =  require("../model/login");



const levelUp = async(user) =>{
   const userData = await login.findById(user.id);
   try{
       await login.findByIdAndUpdate(user.id, {
           level : userData.level + incrementValue
       });

    console.log("data updated")
   }catch(e){
       console.log(e.message)
   }

}

module.exports = {levelUp}