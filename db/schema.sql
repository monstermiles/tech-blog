DROP DATABASE IF EXISTS techblog_db;
CREATE DATABASE techblog_db;
USE techblog_db;



-- seeding comment table 
INSERT INTO comment (user_id, post_id, comment_body)
VALUES (1, 1, "This is a comment.");

INSERT INTO comment (user_id, post_id, comment_body)
VALUES (2, 2, "This is another comment");

INSERT INTO comment (user_id, post_id, comment_body)
VALUES (3, 3, "More comments.");

INSERT INTO comment (user_id, post_id, comment_body)
VALUES (4, 4, "I am making a comment blah blah blahlaladkf;asdjf");
