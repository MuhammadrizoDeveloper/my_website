const mongoose = require("mongoose")

const minBodyLength = 5
const maxBodyLength = 10000

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: [true, "Please enter "],
    minlength: [minBodyLength, `Minimum article body length is ${minBodyLength} characters`],
    maxlength: [maxBodyLength, `Maximum article body length is ${maxBodyLength} characters`]
  }
})

const Article = mongoose.model("article", articleSchema)

mongoose.exports = Article