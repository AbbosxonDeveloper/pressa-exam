insert into admin(username , password) values ('adminn' , crypt('admin' , gen_salt('bf')));
select * from admin;

insert into categories (category_name) values ('IT'), ('Ta''lim');
insert into categories (category_name) values ('Ta''lim');
select * from categories;

-- subs

insert into sub_categories(category_id , sub_category_name) values 
(1 , 'Web dasturlash'),
(3, 'Grafik dizayn'),
(4, 'ingliz tili');
select * from sub_categories;

-- events

insert into events(
    personality,
    company,
    full_name,
    profession,
    phone,
    extra_phone,
    category_id,
    sub_category_id,
    event_date ,
    event_time,
    event_type,
    link,
    theme,
    description,
    body
)values
('Jismoniy shaxs' , 'FinTech', 'Ali Valiyev' , 'backend developer' , '998909534403' , '998934395575',
 1 , 1, '2022-10-20' , '23:00', 'Online', 'https://youtube.com/AliStream', 'How to build backend' ,
  'this video is about backend', 'I want to say the viewers about nice tricks to build top backend.'
);

-- ip
