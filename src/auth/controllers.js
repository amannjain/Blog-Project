const {User} = require("./models");

const register = async(req,res)=>{
    const {name,username,password} = req.body;
    if(!username || !password){
        return res.json({status: "Error", message: "Username and Password are required"})
    }
    var userExists = await User.findOne({username : username});
    if(userExists){
        return res.json({status: "Error", message: "Username already exists"});
    }

    var newUser = await User.create(req.body);
    newUser.ency_password = undefined;
    newUser.salt = undefined;
    return res.json({status: "User Registered Successfully", user: newUser});
};


const login = async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        return res.json({status: "Error", message: "Username and Password are required"});
    }

    var user = await User.findOne({username : username});
    if(!user){
        return res.json({status: "Error", message: "Username not found"});
    }
    if(!user.authenticate(password)){
        return res.json({status: "Error", message: "You entered wrong password"});
    }

    return res.json({status: "Login Successful"});
};


const reset = async(req,res)=>{
    return res.json({status: "Done"})
};

module.exports = {register,login,reset};