const express = require("express")
const app = express()
const ejs = require("ejs")
const port = process.env.PORT || 3000

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("home")
})

app.get("/login", (req, res) => {
  res.send("login page")
})

app.get("/register", (req, res) => {
  res.send("register page")
})

app.get("/secrets", (req, res) => {
  res.send("secrets page")
})

app.listen(port, () => {
  console.log(`App is listening on port ${port}.`)
})
