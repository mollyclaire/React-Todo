import React from "react";

function TodoItem(props) {
    const checked = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                // checked determines whether the input box should be checked or not
                checked={props.item.completed} 
                // onChange takes an empty function and passes a method with the parameter of props.item.id. 
                // In this way, the id of what is clicked is passed along to the handleChange method.
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style={props.item.completed ? checked : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;