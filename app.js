const express = require('express');
const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index');

const app = express();
const PORT = 3000;




// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(__dirname + '/views/partials');





// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());


app.use('/', indexRouter);



app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}}`);
})





