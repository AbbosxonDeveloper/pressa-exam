const GETSUBCATEGORIES = `
    select * from sub_categories
`

const POSTSUBCATEGORY = `
    insert into sub_categories(category_id , sub_category_name) values ($1 , $2)
    returning *
`

const UPDATESUBCATEGORY = `
with old_products as (
    select
       category_id ,
       sub_category_name
    from sub_categories
    where sub_category_id = $1
)update sub_categories as p
set
category_id =
case
    when $2> 0 then $2
    else o.category_id
end,

sub_category_name =
case
    when length($3)> 0 then $3
    else o.sub_category_name
end


from old_products as o
where p.sub_category_id = $1
returning p.sub_category_name , p.category_id
`

const DELETESUBCATEGORY = `
    update sub_categories set status = $1 where category_id = $2
    returning *
`


export {
    GETSUBCATEGORIES,
    POSTSUBCATEGORY,
    UPDATESUBCATEGORY,
    DELETESUBCATEGORY
}