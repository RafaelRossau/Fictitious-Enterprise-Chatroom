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
INSERT INTO adm (adm_email, adm_name, adm_password) VALUES ('marcossilveira@gmail.com', 'Marcos Silveira', 'adm123');
SELECT * FROM adm;