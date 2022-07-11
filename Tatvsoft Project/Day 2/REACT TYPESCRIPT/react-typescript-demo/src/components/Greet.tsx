type GreetProps = {
    name : String;
    messageCount?: Number;
    isLoggedIn: Boolean;
}
export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return(
        <div>
            <h2>
            {props.isLoggedIn
             ?' welcome {props.name }! you have {messageCount} unread messages'
             : 'welcome guest'}
            </h2>
        </div>
    )
}