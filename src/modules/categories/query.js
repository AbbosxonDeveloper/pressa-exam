const GETCATEGORIES = `
    select c.*,
    json_agg(sub.*) as sub_categories
    from categories as c
    left join sub_categories as sub on sub.category_id = c.category_id
    group by c.category_id 
`

const POSTCATEGORY = `
    insert into categories(category_name) values ($1)
    returning *
`

const UPDATECATEGORY = `
    update categories set category_name = $1 where category_id = $2
    returning *
`

const DELETECATEGORY = `
    update categories set status = 'deleted' where category_id = $1
    returning *
`


export { GETCATEGORIES, POSTCATEGORY, UPDATECATEGORY, DELETECATEGORY }