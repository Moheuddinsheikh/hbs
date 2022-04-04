const express = require('express')
const path = require("path"); 
const app = express();
const hbs = require("hbs")
const connection =require("./src/db/conn") 
const Register =require("./src/models/registers");
const port = 3000
const static_path = path.join(__dirname,"../public "); 
const template_path = path.join(__dirname,"../templates/views "); 
const partials_path = path.join(__dirname,"../templates/partials "); 
app.use (express.static(static_path));
app.use (express.urlencoded({ extended:false}));
app.use (express.static({ extended:false}));

app.set("view engine ","hbs");
app.set("views ",template_path);
hbs.registerPartials()
app.post('/register', async (req, res) => {

  res.render("register")
}),
app.listen(port, () => {
  console.log(`Docker image runs successfully!`)
})