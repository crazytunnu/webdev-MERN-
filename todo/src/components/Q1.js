import React, { useState } from 'react'

export default function Q1() {
    const [name, setName] = useState("Backbencher");
    const [age, setage] = useState("23");
    const onNameChange = (e) => {
        setName(e);
    }
    
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e)=>onNameChange(e.target.value)}
                />
                <input type="text"
                    value={age}
                    onChange={(e)=>setage(e.target.value)}
                />
                <h2>
                    Name: {name}, Age: {age}
                </h2>
            </form>
        </div>
    )
}
