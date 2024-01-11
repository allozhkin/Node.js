"use strict";

const http = require("http");
let counterHead = 0;
let counterAbout = 0;
const server = http.createServer((req, res) => {
  console.log("Запрос получен");
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Добро пожаловать на мой сайт!</h1>
    <a href="/about">Ссылка на страницу /about</a>
    <p>Количество посещений страницы ${counterHead}</p>`);
    counterHead++;
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1>Обо мне</h1>
    <a href="/">Ссылка на страницу /</a>
    <p>Количество посещений страницы ${counterAbout}</p>`);
    counterAbout++;
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end("<h1>Страница не найдена!</h1>");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
