import React from "react";
import {marked} from "marked"; 
interface props {
}
export const Article: React.FC<props> = ({}) => {

const resHtml = 
`
## [Ben Awad's tutorial](https://youtu.be/tp_5c6jaNQE)

The tutorial focuses on designing a database to social media website the schema include users, posts, comment, favorites, friends.  
Note: please use snake case as you have to wrap camelcase in double quotes.

### Creating the tables and comments

\`\`\`SQL
create table users (
    id serial primary key, --serial means that it'll auto increment from 1 primary key means it has to be unique, not null and it's the primary way to access the rows within the table
    first_name varchar(255) not null, -- varchar limited string
    last_name text, -- text unlimited string
    age int,
    email text unique not null
);

-- post/comment will be used to represent 1-m relationships (a user/post can have multiple posts/comments)
create table posts (
    id serial primary key,
    title text not null,
    body text default '...', -- default value
    creator_id int references users(id) -- foreign key 1-m relationships
);

create table comments (
    id serial primary key,
    message text not null,
    post_id int references posts(id),
    creator_id int references users(id)
);

-- friends/favorites will be used to represent m-m relationships (these are called join tables)
create table favorites (
    user_id int references users(id),
    post_id int references posts(id),
    primary key (user_id, post_id) -- <- this is called a composite key
);

create table friends (
    user_id1 int references users(id),
    user_id2 int references users(id),
    primary key (user_id1, user_id2)
);
\`\`\`

### Inserting Data

\`\`\`SQL
insert into users (first_name, last_name, age, email) values ('Geralt', 'Riva', 50, 'Geralt@Riva.com');
\`\`\`

### Deleting data

\`\`\`SQL
delete from users where id = 1; -- delete user with an id of 1
\`\`\`

### Deleting a column 

\`\`\`SQL 
drop table users; -- delete the entire table along with its data
\`\`\`
### Editing a table 

\`\`\`SQL
-- add column 
alter table posts add column created_at date not null default now() - random() * interval '100 days'; -- <- now returns the current date 

-- delete column 
alter table posts drop column title;  
\`\`\`


### Select, Where, joins among other things

\`\`\`SQL
select * from users; -- <- this query to get all the columns on every user (since there is no where statement!)
select id, first_name, last_name from users where id = 2; -- get the id first and last name of user 2
select id, first_name, last_name from users where id in (3,7,9); -- get the id first and last name of user 3,7,9
select id, first_name, last_name from users where id between 3 and 9;  -- get the id first and last name of users 3->9

-- string comparisons and boolean conditions
select id, first_name, last_name from users where first_name like 'Kevon'; -- get any user with a first name of Kevon case sensitive

select id, first_name, last_name from users where first_name ilike 'Kevon'; -- get any user with a first name of Kevon not case sensitive

-- joins and alias 
-- get title of a post (id = 88) along with the first and last name of its creator

select p.id, p.title, u.first_name, u.last_name from posts p -- <- p here is an alias for posts 
inner join users u on p.creator_id = u.id
where p.id = 88; 

-- get post's title, post's creator first_name, and comment's messages relating the the post of id 10
select p.id post_id, p.title post_title, u.id user_id, u.first_name user_first_name, c.message comment_message 
from posts p
inner join users u on p."creatorId" = u.id 
inner join comments c on c.post_id = p.id
where p.id = 10; 
\`\`\`

### Create a feed 
\`\`\`SQL
-- create a feed of 20 post with a suitable amount of data regarding the posts in descending order
select p.created_at, p.title, substr(p.body, 1, 30) /* 30 letters only */, u.first_name, c.message, u2.first_name 
from posts p
inner join users u on p."creatorId" = u.id
inner join comments c on c.post_id = p.id
inner join users u2 on u2.id = c.creator_id
order by p.created_at desc
offset 30
limit 20;
\`\`\`
### Fetching a single post 
- Single query 
\`\`\`SQL
select p.title 
       u.first_name post_creator, 
       c.message 
       u2.first_name
from posts p
inner join users u on p."creatorId" = u.id
inner join comments c on c.post_id = p.id
inner join users u2 on c.creator_id = u2.id
where p.id = 7; 
\`\`\`
![single post one query](https://raw.githubusercontent.com/Walid-Kh/learning/main/sql/screenshots/singlePostOneQuery.png)

- Multiple queries
\`\`\`SQL
select p.title, u.first_name 
from posts p
inner join users u on u.id = p."creatorId"
where p.id = 7;
\`\`\`
![post Queries](https://raw.githubusercontent.com/Walid-Kh/learning/main/sql/screenshots/postQuery.png)

\`\`\`SQL
select c.message, u.first_name 
from comments c 
inner join users u on u.id = c.creator_id
where c.post_id = 7;
\`\`\`
![comment Queries](https://raw.githubusercontent.com/Walid-Kh/learning/main/sql/screenshots/postQuery.png)
`; 
return (
<div dangerouslySetInnerHTML={{__html: marked(resHtml)}}
    className="markdown">
</div>
);
};
export default Article;