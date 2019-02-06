create table article
(
	types varchar(31) not null,
	id int auto_increment
		primary key,
	price double not null,
	supplier_id varchar(100) not null,
	title varchar(100) not null
)
engine=MyISAM
;

create table book
(
	author varchar(100) not null,
	isbn varchar(255) null,
	number_of_pages int not null,
	id int not null
		primary key
)
engine=MyISAM
;

create table fiction
(
	genre varchar(255) null,
	summary varchar(255) null,
	id int not null
		primary key
)
engine=MyISAM
;

create table game
(
	genre varchar(255) null,
	minimum_age int null,
	publisher varchar(100) null,
	id int not null
		primary key
)
engine=MyISAM
;

create table lp
(
	artist varchar(100) null,
	genre varchar(255) null,
	id int not null
		primary key
)
engine=MyISAM
;

create table non_fiction
(
	subject varchar(255) null,
	id int not null
		primary key
)
engine=MyISAM
;

create table orderline
(
	id int auto_increment
		primary key,
	amount int not null,
	article_id int null,
	order_id int null
)
engine=MyISAM
;

create index FK7jhn7tvm2wi722qnm2ilw06hh
	on orderline (order_id)
;

create index FKlc7reevhjilwhuqe01cu96xuu
	on orderline (article_id)
;

create table orders
(
	id int auto_increment
		primary key,
	order_time datetime null,
	user_id int null
)
engine=MyISAM
;

create index FK32ql8ubntj5uh44ph9659tiih
	on orders (user_id)
;

create table rating
(
	id int auto_increment
		primary key,
	description varchar(255) null,
	score int not null,
	article_id int null,
	user_id int null
)
engine=MyISAM
;

create index FKf68lgbsbxl310n0jifwpfqgfh
	on rating (user_id)
;

create index FKff3wnj5681kqa2tdaimkkhx7b
	on rating (article_id)
;

create table user_favourites
(
	user_id int not null,
	article_id int not null
)
engine=MyISAM
;

create index FK560wh033j16sm8dlah1xpig9l
	on user_favourites (article_id)
;

create index FKsotykjapinh9k0qddenalw94k
	on user_favourites (user_id)
;

create table users
(
	id int auto_increment
		primary key,
	first_name varchar(255) null,
	last_name varchar(255) null
)
engine=MyISAM
;

