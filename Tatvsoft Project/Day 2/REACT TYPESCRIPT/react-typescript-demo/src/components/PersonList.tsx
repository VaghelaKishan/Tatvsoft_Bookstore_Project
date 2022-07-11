type PersonsListProps = {
    names: {
        first: String,
        last: String,
    }[]
}

export const PersonList= (props: PersonsListProps) => {
    return(
        <div>
           {props.names.map((name) => {
            return(
                <h2 key={name.first}>
                    {name.first} {name.last}
                </h2>
            )
           })}
        </div>
    )

}
