CREATE DATABASE userinfo;
BACKUP DATABASE userinfo
TO DISK = 'D:\backups\userinfo.bak';

CREATE TABLE user_info (
	user_id INT AUTO_INCREMENT; 
	username VARCHAR(255) PRIMARY KEY;
	password VARCHAR(255) NOT NULL;
	email VARCHAR(255) PRIMARY KEY CONSTRAINT LIKE '%@%(.com OR .org)'; /*need to constraint this to only allow alphanumeric string followed by @ and then .com*/
	first_name TINYTEXT NOT NULL;
	last_name TINYTEXT NOT NULL;


)


INSERT INTO user_info (username,password,email,first_name,last_name)
VALUES (/*????*/)
