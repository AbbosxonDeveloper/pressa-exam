create database pressa;
\c pressa

CREATE EXTENSION pgcrypto;

drop table admin;
create table IF NOT EXISTS admin (
    admin_id serial primary key,
    username varchar (32) not null,
    password varchar(60) not null
);

create table IF NOT EXISTS categories (
    category_id serial primary key,
    category_name varchar(60) not null,
    status varchar(20) default 'active'
);

create table IF NOT EXISTS sub_categories (
    sub_category_id serial primary key,
    category_id int references categories(category_id),
    sub_category_name varchar(100) not null,
    status varchar(20) default 'active'
);

drop table events;
create table IF NOT EXISTS events (
    event_id serial primary key,
    -- user
    personality varchar(32) not null,
    company text not null,
    full_name varchar(100) not null,
    profession varchar(64) not null,
    phone varchar(12) not null,
    extra_phone varchar(12) not null,
    -- event
    category_id int references categories(category_id),
    sub_category_id int references sub_categories(sub_category_id),
    event_date date not null,
    event_time time not null,
    event_type varchar(12) not null,
    link text not null,
    -- post
    theme text not null,
    description text not null,
    body text not null,
    views int default 1,
    status varchar(12) default 'pending',
    created_at timestamp default current_timestamp
);

-- drop table images;
create table images (
    image_id serial primary key ,
    event_id int references events(event_id),
    image text not null
);

drop table ip_address;
create table ip_address (
    ip_id serial primary key,
    ip text not null
);

