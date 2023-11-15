import styles from "./ToDoItem.module.scss";

type ToDoItemProps = {
    id: number;
    title: string;
    completed: boolean;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
}

const ToDoItem = ({
    id,
    title,
    completed,
    onToggle,
    onRemove
}: ToDoItemProps) => {

    return (
        <li className={styles.toDoItem}>
            <input
                type="checkbox"
                checked={completed}
                aria-checked={completed}
                onChange={() => onToggle(id)}
            />
            <p className={`${styles.title} ${completed && styles.completed}`}>
                {title}
            </p>
            <button onClick={() => onRemove(id)}></button>
        </li>
    );
};

export default ToDoItem;