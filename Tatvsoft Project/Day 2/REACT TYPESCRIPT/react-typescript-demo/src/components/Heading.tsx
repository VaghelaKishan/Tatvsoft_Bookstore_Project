type HeadingProps = {
    Children: String
}

export const Heading = (props: HeadingProps) => {
    return <h2>{props.Children}</h2>
}