create database casadocodigo_nodejs;

use casadocodigo_nodejs;

create table produtos(
  id bigint auto_increment primary key,
  nome varchar(255),
  descricao varchar(255),
  preco decimal(10,2)
);

insert into produtos (nome, descricao, preco) values 
  ('Aprendendo VueJS', 'Livro de treinamento em vuejs', 50),
  ('Java for dummies', 'Livro Java', 100),
  ('AngularJS', 'Angular for the win', 15.30);
