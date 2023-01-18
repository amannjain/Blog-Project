const {Blog} = require("./models");
const createBlog = async(req,res)=>{
    var blog = new Blog(req.body);
    await blog.save();
    return res.json({status: "Done"})
};

const deleteBlog = async(req,res)=>{
    return res.json({status: "Done"})
};

const updateBlog = async(req,res)=>{
    return res.json({status: "Done"})
};

const readBlog = async(req,res)=>{
    return res.json({status: "Done"})
};

module.exports = {createBlog,deleteBlog,updateBlog,readBlog};