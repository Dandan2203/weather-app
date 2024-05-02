const express = require("express");
const hbs = require("hbs");
const fetch = require("node-fetch");

const app = express();
app.use(express.static('public'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

const port = 3000;

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/weather/:city?', async (req, res) => {
    let city = req.params.city || 'Київ';
    if (!city) {
        city = req.query.city;
    }
    if (!city) {
        res.render("error", { message: "City parameter is missing" });
        return;
    }

    let key = '22e3d2df56e951a69928cdb6dbde1e1c';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=ua`;
    let response = await fetch(url);
    let weather = await response.json();

    res.render('weather', { city, weather });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});