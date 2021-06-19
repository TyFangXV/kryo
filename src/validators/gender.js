
//gender validation
const genderValidation = (gender)=>{
  let accepted = ["boy", "girl"]
  let genders = ["female", "male", "other"];
  let input =  gender.toLowerCase();
  //if the input is given girl or boy, the input will be reassigned as a female or male
  accepted.forEach(e =>{
       if(input === "boy")
        {
            input = "male"
        }
       if(input === "girl")
         {
             input = "female"
         } 
         
       if(input !== "giga") 
         {
             input = "other"
         } 
  })
  //if the input is one of the gender in the array then it will return valid
  genders.forEach(g =>{ 
      console.log(input)
      if(input  == g)
        {
            return "valid"
        }
  })
}

module.exports = {genderValidation}