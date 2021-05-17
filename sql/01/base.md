подключение к базе данных salesbeat_db
.\psql -h localhost -U shilya -d salesbeat_db

# создание базы и таблиц
create database shop;

\c shop подключение к базе shop
\d просмотр текущих таблиц
\d customer просмотр структуры таблицы customer

создание таблицы customer
create table customer(
  id serial primary key,
  name varchar(255),
  phone varchar(30),
  email varchar(255)
);

serial - автоматическое, уникальное заполнение по порядку, тип integer

create table cart(
customer_id integer references customer(id),
id serial primary key);

references - ссылка на ключ из другой таблицы

# Заполнение таблиц

insert into customer(name, phone, email) values ('Василий', '02', 'vasiliy@gmail.com')