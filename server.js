const express = require("express");


const app = express();

app.get('/', (req, res) => {
    
     res.render('index.ejs')
     console.log("API IS RUNNING"); 
})

app.get('/login', (req, res) => {
     res.render('login.ejs')
})

app.get('/register', (req, res) => {
     res.render('register.ejs')
})
app.listen(3000, () => {
     console.log(`server is running on http://localhost:3000`);
})