import React, { createContext, useContext } from 'react';
const MyContext = createContext(1);
 const MyComponent = () => (
    <>
        <p>{useContext(MyContext)}</p>
        <MyContext.Provider value={2}>
            <p>{useContext(MyContext)}</p>
        </MyContext.Provider>
    </>
);
export default MyComponent;

///Predict output;--
//output will be 1 and passed value will be 2;
//Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.