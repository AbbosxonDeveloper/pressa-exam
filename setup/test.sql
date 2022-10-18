(with old_products as (
         select
            category_id ,
            sub_category_name
         from sub_categories
         where sub_category_id = 1
     )update sub_categories as p
     set
     category_id =
     case
         when 1> 0 then 2
         else o.category_id
     end,
    
     sub_category_name =
     case
         when length('Wep dasturlash')> 0 then 'Wep dasturlash'
         else o.sub_category_name
     end
    
  
     from old_products as o
     where p.sub_category_id = 1
     returning *;
)

-- events

with old_events as (
    select
       *
    from events
    where event_id = 1
)update events as p
set
event_date =
case
    when length('2022-10-21')> 0 then '2022-10-21'
    else o.event_date
end,

event_type =
case
    when length('2022-10-21')> 0 then '2022-10-21'
    else o.event_type
end,
event_time = 
case
    when length('15:45')> 0 then '15:45'
    else o.event_time
end,
full_name=
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.full_name
end,
profession=
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.profession
end,

phone=
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.phone
end,

extra_phone =
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.extra_phone
end,

theme =
case
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.theme
end,

description = 
case
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.description
end,

status =
case
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.status
end,


link=
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.link
end,

category_id=
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.category_id
end,

sub_category_id=
case 
    when length('full info in telegram')> 0 then 'full info in telegram'
    else o.sub_category_id
end,

from old_events as o
where p.event_id = 1
returning p.*;


-- template

with old_events as (
    select
       *
    from events
    where event_id = 1
)update events as p
set
event_time = 
case 
    when length('14:50')> 0 then '14:50'
    else o.event_time
end

from old_events as o
where p.event_id = 1
returning p.*;