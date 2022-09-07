import React from "react";

const TodoContext = React.createContext();

function TodoProvider(props) {
    retunr (
<TodoContext.Provider value={{
    
}}>
    {props.children}
</TodoContext.Provider>
        
    );
}

<TodoContext.Consumer></TodoContext.Consumer>