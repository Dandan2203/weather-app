# WeatherApp

> Погодний додаток з API OpenWeatherMap, побудований на Node.js та Handlebars.  
> Дозволяє користувачу дізнатись поточну погоду в будь-якому місті світу.

## Про проєкт

Лабораторна робота 1.  
Він включає фронтенд (HTML/HBS + CSS) та бекенд (Node.js + Express).  
Також реалізовано:

- API-документація через Swagger  
- Cookie popup відповідно до GDPR  
- Політика конфіденційності 
- Компоненти Handlebars

## Технології

- Node.js  
- Express.js  
- Handlebars (HBS)  
- dotenv  
- cookieconsent.js  
- Swagger (swagger-jsdoc, swagger-ui-express)  
- OpenWeatherMap API  

## Встановлення та запуск

### 1. Клонування репозиторію:
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Встановлення залежностей:
```bash
npm install
```

### 3. Створення файлу `.env`:
```env
API_KEY=your_openweathermap_api_key
```

### 4. Запуск сервера:
```bash
node index.js
```

## Структура проєкту

```
weather-app/
├── public/
│   └── styles.css
├── views/
│   ├── partials/
│   │   ├── header.hbs
│   │   └── footer.hbs
│   ├── main.hbs
│   ├── weather.hbs
│   └── error.hbs
├── index.js
├── .env
├── .gitignore
├── LICENSE
├── licenses.md
├── README.md
├── PrivacyPolicy.md
├── package.json
└── package-lock.json
```

## API

- `GET /` — головна форма введення міста  
- `GET /weather?city=місто` — повертає дані погоди  
- Документація Swagger: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Cookie popup (GDPR)

На сайті використано бібліотеку cookieconsent.js, яка повідомляє користувача про збір cookie та реалізована згідно з вимогами GDPR.

## Політика конфіденційності

Файл `PrivacyPolicy.md` пояснює:
- які дані використовуються;
- як працює cookie;
- що не зберігаються персональні дані.

## Компоненти шаблонів (аналог Storybook)

**2 компоненти Handlebars з варіаціями:**
- `header.hbs` / `footer.hbs` — вставляються в усі сторінки (`{{> header }}`)
- `main.hbs` — містить форму пошуку
  - Варіант 1: стандартна форма
  - Варіант 2: форма з повідомленням про помилку
- `weather.hbs` — погода для різних міст (2+ варіації)

## Swagger-документація

Swagger реалізовано через бібліотеки:
```bash
npm install swagger-jsdoc swagger-ui-express
```
Файл конфігурації — в `index.js`  
Документація доступна за `/api-docs`.

## Ліцензія

Проєкт поширюється під ліцензією MIT.  
Файл: `LICENSE` 
Список ліцензій для залежностей згенеровано в `licenses.md` командою:
```bash
npx license-checker --out licenses.md
```

## 👤 Автор

Maizenberg Petro  
Група ЗІПЗ-22-1

***Вибачте, що маленький проєкт для лабораторної, намагаюся повернути доступ до свого gitlab***