# set schema shopr2;

CREATE TABLE user (
  id                INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name              VARCHAR(255) NOT NULL,
  first_name        VARCHAR(255) NOT NULL
);

CREATE TABLE article
(
  id                INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  types             VARCHAR(31),
  price             DOUBLE,
  supplier_id       VARCHAR(100),
  title             VARCHAR(100)
);

CREATE TABLE fiction
(
  id                INT NOT NULL,
  author            VARCHAR(100),
  isbn              VARCHAR(17),
  number_of_pages   INT,
  genre             VARCHAR(255),
  summary           VARCHAR(255),
  FOREIGN KEY (id) REFERENCES article(id)
);

CREATE TABLE non_fiction
(
  id                INT NOT NULL,
  author            VARCHAR(100),
  isbn              VARCHAR(17),
  number_of_pages   INT,
  subject           VARCHAR(255),
  FOREIGN KEY (id) REFERENCES article(id)
);

CREATE TABLE lp
(
  id                INT NOT NULL,
  artist            VARCHAR(100),
  genre             VARCHAR(255),
  FOREIGN KEY (id) REFERENCES article(id)
);

CREATE TABLE game
(
  id                INT NOT NULL,
  genre             VARCHAR(255),
  publisher         VARCHAR(100),
  minimum_age       INT(11),
  FOREIGN KEY (id) REFERENCES article(id)
);

CREATE TABLE orders
(
  id                INT PRIMARY KEY NOT NULL,
  order_time        TIMESTAMP,
  user_id           INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE orderline
(
  id                INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  amount            INT,
  article_id        INT NOT NULL,
  order_id          INT NOT NULL,
  FOREIGN KEY (article_id) REFERENCES article(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE rating
(
  id                INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description       VARCHAR(255),
  score             INT,
  article_id        INT,
  user_id           INT,
  FOREIGN KEY (article_id) REFERENCES article(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE user_favourites
(
  user_id           INT NOT NULL,
  article_id        INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id),
  FOREIGN KEY (article_id) REFERENCES article(id)
);