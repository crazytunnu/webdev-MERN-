import React from 'react'
import { UserConsumer } from './Context'

export default function ContextB() {
    return (
        <UserConsumer>
            {
                username=>{
                    return <h1>hello{username}</h1>
                }
            }
        </UserConsumer>
    )
}
