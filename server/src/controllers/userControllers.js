
const User = require('../models/User')

 
const signUp = async (req, res, next)=>{
    const { mobileNumber, email, dateOfBirth, fullName, password } = req.body;
    if (
        !mobileNumber && mobileNumber.trim() ==="" &&  !email && email.trim() ==="" &&  !dateOfBirth && dateOfBirth.trim() ==="" &&  !fullName && fullName.trim() ==="" &&  !password && password.trim() ==="" 
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    let user;
   try{
    user = new User({ mobileNumber, email, dateOfBirth, fullName, password});
    user = await user.save();
    }
    catch(err){
    return console.log(err);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occured"});
    }
    return res.status(201).json({ user });
};

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return console.log(err);
    }
    if(!users) {
        return res.status(500).json({ message: "User not found"});
    }
    return res.status(200).json({ users });
};

module.exports = {signUp, getAllUsers}