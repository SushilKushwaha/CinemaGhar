
const User = require('../models/userModel')

const registerNewUser = async(req,res)=>{
   try{
    await User.create(req.body)
    res.json({
        msg: "registered successfully"
    })
}catch(err){
    console.log(err)
}
}

module.exports = {registerNewUser}