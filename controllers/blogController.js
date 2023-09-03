const Article = require("../models/Article.js")

// controller actions
module.exports.blog_get = (req, res) => {
  res.render("blog")
}
