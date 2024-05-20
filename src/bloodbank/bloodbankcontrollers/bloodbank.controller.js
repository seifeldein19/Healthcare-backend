const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const bloodbank = require("../model/bloodbank.model");



const getAllbloodbankHandler = async(req,res)=>
{
    try {
        const data =  await bloodbank.find({});
    res.json({message:"success",data})
    } catch (error) {
        res.json({massage:"error",error})
    }
}
const addblodbankHander = async (req,res)=>{
  
    try {
        const {email,bloodbank_name,phone,password,location,image,rate,A_positive,A_negative,B_positive, B_negative ,  O_positive , O_negative ,AB_positive ,AB_negative,needed
        }= req.body;
        const bloodbank1= await bloodbank.findOne({email})
       
         if(bloodbank1)
         {res.json({message:"email is ready exist"})}
       
         else{
       
            bcrypt.hash(password, 7, async function(err,hash) {
                if(err) throw new Error(err)
                const newbloodbank = new bloodbank({email,bloodbank_name,phone,password:hash,location,image,rate,A_positive,A_negative,B_positive, B_negative ,  O_positive , O_negative ,AB_positive ,AB_negative,needed})
                const data = await newbloodbank.save()
               res.json({message:"success",data})
            });
      }} 
        catch (error) {
        res.json({massage:"error",error})
        
    }
    
}


module.exports =
{
    addblodbankHander,
    getAllbloodbankHandler,

}