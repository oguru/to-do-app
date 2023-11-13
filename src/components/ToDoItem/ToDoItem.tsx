// single to do item
import React from "react";
import styles from "./ToDoItem.module.scss";

interface ToDoItemProps {
    id: number;
    title: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({
    id,
    title,
    completed,
    onToggle,
    onRemove
}) => {

    return (
        <li className={styles.toDoItem}>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
            />
            <span className={`${styles.title} ${completed && styles.completed}`}>{title}</span>
            <button onClick={() => onRemove(id)}>X</button>
        </li>
    );
};

export default ToDoItem;