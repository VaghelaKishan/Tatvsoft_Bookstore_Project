// object in ts
interface usersType{
    name:string,
    age:number,
    address:any,
}
let users={
    name:'kishan',
    age:21,
    address:'rajkot'
}
//any let users:any

users.name="kevin";
console.warn(users);