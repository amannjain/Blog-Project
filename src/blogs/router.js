const express = require("express");
const blogRouter = express.Router();

const {writeBlog,deleteBlog,updateBlog,readBlog} = require("./controllers");


blogRouter.post("/writeblog",writeBlog);
blogRouter.post("/deleteblog",deleteBlog);
blogRouter.post("/updateblog",updateBlog);
blogRouter.get("/readblog",readBlog);

module.exports = {blogRouter};