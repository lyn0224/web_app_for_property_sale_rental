import React, { useState} from 'react';

const Context = React.createContext()
function HomeContextProvider({children}){
    const [id, setID] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function changedValue(){
        setID('1');
        setName('First');
        setDescription('This is first home');
    }

    return (
        <Context.Provider value = {{id,name,description, changedValue}}>
            {children}
        </Context.Provider>
    )
}

export {HomeContextProvider, Context}