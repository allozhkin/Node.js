# Домашнее задание №1

## Напишите HTTP сервер и реализуйте два обработчика, где:
1. По URL “/” будет возвращаться страница, на которой есть гиперссылка на вторую страницу по ссылке “/about”
2. А по URL “/about” будет возвращаться страница, на которой есть гиперссылка на первую страницу “/”
3. Также реализуйте обработку несуществующих роутов (404).
 * На каждой странице реализуйте счетчик просмотров. Значение счетчика должно увеличиваться на единицу каждый раз, когда загружается страница.