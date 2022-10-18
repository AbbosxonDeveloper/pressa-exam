const LOGINADMIN = `
    select a.* from admin as a where username = $1 and password = crypt($2 , a.password)
`

export default LOGINADMIN