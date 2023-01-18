const express = require("express");
const { isAuthenticated } = require("../helper/utils");
const blogRouter = express.Router();

const {createBlog,deleteBlog,updateBlog,readBlog} = require("./controllers");


blogRouter.post("/createblog",isAuthenticated,createBlog);
blogRouter.post("/deleteblog",deleteBlog);
blogRouter.post("/updateblog",updateBlog);
blogRouter.get("/readblog",readBlog);

module.exports = {blogRouter};