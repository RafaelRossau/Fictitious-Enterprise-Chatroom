create database Fictitious_Enterprise_Chatroom;
use Fictitious_Enterprise_Chatroom;

create table employees(
	employee_email varchar(100) primary key not null,
    employee_name varchar(100) NOT NULL,
    employee_password varchar(12) not null
);

create table adm(
	adm_email varchar(100) primary key not null,
    adm_name varchar(100) NOT NULL,
    adm_password varchar(12) not null
);
create table messages(
	sender_email varchar(100) not null,
    foreign key (sender_email) REFERENCES employees(employee_email),
    message varchar(9999) not null,
    posted_in timestamp default current_timestamp
);
INSERT INTO adm (adm_email, adm_name, adm_password) VALUES ('marcossilveira@gmail.com', 'Marcos Silveira', 'adm123');
SELECT * FROM adm;