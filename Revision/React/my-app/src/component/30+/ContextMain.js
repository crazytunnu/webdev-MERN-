import React from 'react'
import { UserProvider } from './Context'
import ContextA from './ContextA'
export default function ContextMain() {
    return (
        <UserProvider value={"Arshad"}>
            <ContextA/>
        </UserProvider>
    )
}
