\c benzdb;
INSERT INTO benzdb(name, num, exp, height, weight, type)
VALUES
(
  'e350',1,64,7,69,'sedan'
),
(
  'sls 550',2,10,142,130,'coupe'
);


INSERT INTO users(name,password) Values('foo','bar');



INSERT INTO posts(post_title,post_content)
Values
('sample','sample content text'),
('sample 2','sample content text 2');
