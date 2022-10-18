const GETEVENTS = `
    select * from events
`

const GETIMAGES = `
    select * from images
`

const POSTIMAGE = `
    insert into images (event_id , image) values
    ($1 , $2)
    returning *
`

const POSTEVENT = `
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
($1, $2, $3 , $4 , $5 , $6 , $7 , $8 , $9 , $10 , $11 , $12 , $13 , $14 ,$15)
returning *
`

const UPDATE_EVENT = `
    update events set status = $1 where event_id = $2
    returning *
`

const DELETE_EVENT = `
    update events set status = 'deleted' where event_id = $1
    returning *
`

const GET_IP = `
    select * from ip_address
`

const ADD_VIEWS = `
    update events set views = views + 1 
    where event_id = $1 
    returning *
`

const ADD_IP = `
    insert into ip_address (ip) values ($1)
    returning *
`


export {
    GETEVENTS,
    GETIMAGES,
    POSTIMAGE,
    POSTEVENT,
    UPDATE_EVENT,
    DELETE_EVENT,
    ADD_VIEWS,
    GET_IP,
    ADD_IP
}