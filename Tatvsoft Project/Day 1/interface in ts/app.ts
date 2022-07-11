// interface in ts

interface userType{
    name:string,
    age:number,
    getName:()=>string
}

let users:userType={
    name:'vaghela kishan',
    age:60,
    getName:function()
    {
        return "kishan vaghela"
    }

}
console.warn(users);
console.warn(users.getName());