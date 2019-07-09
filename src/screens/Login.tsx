import * as React from 'react'

interface IProps {
    title: string
}

export const Login: React.FunctionComponent<IProps> = props => {
    return <h1>Login {props.title}</h1>
}