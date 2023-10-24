mysql -u root -p
비밀번호

CREATE USER 'JAVAJO'@'localhost' identified by 'JAVAJO';

CREATE DATABASE ruralcommunitiesactivity CHARACTER SET = UTF8;

GRANT ALL PRIVILEGES ON ruralcommunitiesactivity.* TO JAVAJO@localhost;

EXIT;

mysql -u root -p
JAVAJO
JAVAJO

USE ruralcommunitiesactivity;

CREATE TABLE test(
id INT PRIMARY KEY,
content VARCHAR(100),
date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO TEST(ID, CONTENT) VALUES (1, 'This is a test content1.');
INSERT INTO TEST(ID, CONTENT) VALUES (2, 'This is a test content2.');

SELECT * FROM TEST;

COMMIT;

-- 트리거 권한 주기
mysql -u root -p
비밀번호

SET GLOBAL log_bin_trust_function_creators = 1;

USE mysql;
GRANT TRIGGER ON ruralcommunitiesactivity.* TO 'JAVAJO'@'localhost';
FLUSH PRIVILEGES;

EXIT;

mysql -u JAVAJO -p
JAVAJO