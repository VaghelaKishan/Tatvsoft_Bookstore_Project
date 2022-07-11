type PersonProps={
    name:{
        first :String
        last:String
    }
}
export const Person =(props: PersonProps)=> {
    return (
    <div>
        {props.name.first} {props.name.last}
        </div>
    )
}