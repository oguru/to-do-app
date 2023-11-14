import {FormEvent, useState, useRef} from "react";
import {addToDoItem} from "../../store/toDoItemsSlice";
import styles from "./AddToDo.module.scss";
import {useAppDispatch} from "../../store/hooks";

const AddToDo = () => {
    const [title, setTitle] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addToDoItem(title));
        setTitle("");
        inputRef.current?.focus();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                aria-label="Input field for add new to-do item"
                ref={inputRef}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
                placeholder="Enter your to-do item"
            />
            <button
                disabled={!title}
                aria-label="submit button"
            >
                Add
            </button>
        </form>
    );
};

export default AddToDo;