import { ProfilerProps } from "react"

export type PrivateProps ={
    name: string
}

export const Profile = ({name}: ProfilerProps) => {
    return <div> Private Profile component. name is {name}</div>
}