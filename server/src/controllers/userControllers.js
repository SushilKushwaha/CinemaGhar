
const User = require('../models/User')
const bcrypt = require('bcryptjs');

 
const signUp = async (req, res, next)=>{
    const { mobileNumber, email, dateOfBirth, fullName, password } = req.body;
    if (
        !mobileNumber && mobileNumber.trim() ==="" &&  !email && email.trim() ==="" &&  !dateOfBirth && dateOfBirth.trim() ==="" &&  !fullName && fullName.trim() ==="" &&  !password && password.trim() ==="" 
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
   try{
    user = new User({ mobileNumber, email, dateOfBirth, fullName, password: hashedPassword});
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

const updateUser = async (req, res, next) => {
    const id = req.params.id;

    const { mobileNumber, email, dateOfBirth, fullName, password } = req.body;
    if (
        !mobileNumber && mobileNumber.trim() ==="" &&  !email && email.trim() ==="" &&  !dateOfBirth && dateOfBirth.trim() ==="" &&  !fullName && fullName.trim() ==="" &&  !password && password.trim() ==="" 
    ) {
        return res.status(422).json({ message: "Invalid Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = await User.findByIdAndUpdate(id, { mobileNumber, email, dateOfBirth, fullName, password: hashedPassword });
    } catch (error) {
       return console.log(err); 
    }
    if(!user) {
        return res.status(500).json({ message: "Somethings went Worng"})
    }
    return res.status(200).json({ message: "Updated Sucessfully" });
};

const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;
    try {
         user = await User.findByIdAndDelete(id);
    } catch (error) {
        return console.log(err);
    }
    if(!user) {
        return res.status(500).json({ message: "User not Found"})
    }
    return res.status(200).json({ message: "Deleted Sucessfully" });

};

module.exports = {signUp, getAllUsers, updateUser, deleteUser}