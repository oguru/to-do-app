import {deleteToDoItem, toggleToDoItem} from "../../store/toDoItemsSlice";
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {RootState} from "../../store/store";
import ToDoItem from "../../components/ToDoItem/ToDoItem";
import styles from "./ToDoList.module.scss";

const ToDoList = () => {
    const toDoItems = useAppSelector((state: RootState) => state.toDoItems);
    const dispatch = useAppDispatch();

    const toggleItem = (id: number) => {
        dispatch(toggleToDoItem(id));
    };

    const deleteItem = (id: number) => {
        dispatch(deleteToDoItem(id));
    };

    return (
        <ul className={styles.toDoList}>
            {toDoItems.map(({id, title, completed}) => (
                <ToDoItem
                    key={id}
                    id={id}
                    completed={completed}
                    title={title}
                    onRemove={deleteItem}
                    onToggle={toggleItem}
                />
            ))}
        </ul>
    );
};

export default ToDoList;