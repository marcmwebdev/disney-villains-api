CREATE DATABASE disney;

CREATE USER 'villains'@'localhost' IDENTIFIED with mysql_native_password BY 'vill4in$';

GRANT ALL ON disney.* TO 'villains'@'localhost';

USE disney;

CREATE TABLE villains (
  id INT auto_increment,
  name varchar(255),
  movie varchar(255),
  slug varchar(255),
  createdat datetime default now(),
  updatedat datetime default now() on update NOW(),
  deletedat datetime default now(),
  primary key (id)
); 

insert into villains (name, movie, slug) VALUES ('Captain hook','Peter Pan','captain-hook');
  insert into villains (name, movie, slug) VALUES ('Cruella de Vil','One Hundred and One Dalmatians','cruella-de-vil');
  insert into villains (name, movie, slug) VALUES ('Gaston','Beauty and the Beast','gaston');
  insert into villains (name, movie, slug) VALUES ('Hades','Hercules','hades');
  insert into villains (name, movie, slug) VALUES ('Horned King','The Black Cauldron','horned-king');
  insert into villains (name, movie, slug) VALUES ('Jafar','Aladdin','jafar');
  insert into villains (name, movie, slug) VALUES ('Lady Tremaine','Cinderella','lady-tremaine');
  insert into villains (name, movie, slug) VALUES ('Madame Medusa','The Rescuers','madame-medusa');
  insert into villains (name, movie, slug) VALUES ('Madam Mim','The Sword in the Stone','madam-mim');
  insert into villains (name, movie, slug) VALUES ('Maleficent','Sleeping Beauty','maleficent');
  insert into villains (name, movie, slug) VALUES ('Prince John','Robin Hood','prince-john');
  insert into villains (name, movie, slug) VALUES ('Sir Hiss','Robin Hood','sir-hiss');
  insert into villains (name, movie, slug) VALUES ('Queen Grimhilde','Snow White and the Seven Dwarfs','queen-grimhilde');
  insert into villains (name, movie, slug) VALUES ('Queen of Hearts','Alice in Wonderland','queen-of-hearts');
  insert into villains (name, movie, slug) VALUES ('Scar','The Lion King','scar');
  insert into villains (name, movie, slug) VALUES ('Shan Yu','Mulan','shan-yu');
  insert into villains (name, movie, slug) VALUES ('Shere Khan','The Jungle Book','shere-khan');
  insert into villains (name, movie, slug) VALUES ('Ursula','The Little Mermaid','ursula');