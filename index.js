// Імпорт необхідних бібліотек
const express = require("express");
const hbs = require("hbs");
const fetch = require("node-fetch");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.static('public'));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Порт для запуску сервера
const port = process.env.PORT || 3000;

// Swagger конфігурація
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather App API",
      version: "1.0.0",
      description: "API для погодного додатку",
    },
  },
  apis: ["./index.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /:
 *   get:
 *     summary: Головна сторінка з формою
 *     responses:
 *       200:
 *         description: Повертає HTML форму для введення міста
 */

app.get('/', (req, res) => {
    res.render('main');
});

/**
 * @swagger
 * /weather:
 *   get:
 *     summary: Отримання погоди за містом
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: Назва міста для отримання прогнозу погоди
 *     responses:
 *       200:
 *         description: Повертає JSON з погодою
 *       404:
 *         description: Місто не знайдено
 */

app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        res.render("error", { message: "Місто не вказано" });
        return;
    }

    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=ua`;

    try {
        const response = await fetch(url);
        const weather = await response.json();
        if (weather.cod !== 200) {
            res.render("error", { message: weather.message });
            return;
        }
        res.render('weather', { city, weather });
    } catch (error) {
        res.render("error", { message: "Помилка отримання даних" });
    }
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});