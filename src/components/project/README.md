# SQL

## [Ben Awad's tutorial](https://youtu.be/tp_5c6jaNQE)

The tutorial focuses on designing a database to social media website the schema include users, posts, comment, favorites, friends.  
Note: please use snake case as you have to wrap camelcase in double quotes.

### Creating the tables and comments

```SQL
create table users (
  id serial primary key, --serial means that it'll auto increment from 1 primary key means it has to be unique, not null and it's the primary way to access the rows within the table  
  first_name varchar(255) not null, -- varchar limited string  
  last_name text, -- text unlimited string  
  age int,  
  email text unique not null  
);
```