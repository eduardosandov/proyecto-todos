import React from "react";
import { TodoContext } from "../TodoContext";


function TodoForm () {
    const {
        saveTodo,
    } = React.useContext(TodoContext);
    const onCancel = () =>{

    };
    const onSubmit = () =>{

    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                ...
            </label>
            <textarea 
            placeholder="cortar la cebolla"
            />
            <div>
                <button
                type="button"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };