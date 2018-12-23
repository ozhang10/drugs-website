CREATE DATABASE userinfo;
BACKUP DATABASE userinfo
TO DISK = 'D:\backups\userinfo.bak';

CREATE TABLE user_info (
	user_id INT AUTO_INCREMENT; 
	username TINYTEXT PRIMARY KEY;
	password VARCHAR(30) NOT NULL;
	email VARCHAR PRIMARY KEY(255) CONSTRAINT LIKE '%@%(.com OR .org)'; /*need to constraint this to only allow alphanumeric string followed by @ and then .com*/
	first_name TINYTEXT NOT NULL;
	last_name TINYTEXT NOT NULL;


)


INSERT INTO user_info (username,password,email,first_name,last_name)
VALUES (/*????*/)