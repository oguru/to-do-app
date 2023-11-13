import React from "react";
import ToDoItem from "../../components/ToDoItem/ToDoItem";

const ToDoList = () => {
    const toDoItems = [{
        id: 1,
        title: "Mow the lawn",
        completed: true,
        onToggle: () => {},
        onRemove: () => {}
    }, {
        id: 2,
        title: "Clean up the kitchen",
        completed: false,
        onToggle: () => {},
        onRemove: () => {}
    }];
    return (
        <ul>
            {toDoItems.map(({id, title, completed, onToggle, onRemove}) => (
                <ToDoItem
                    key={id}
                    id={id}
                    title={title}
                    completed={completed}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
};

export default ToDoList;