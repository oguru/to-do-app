import React from "react";

const AddToDo = () => {
    const [title, setTitle] = React.useState("");

    const createToDo = (title: string) => {
        console.log(title);
    };

    const handleSubmit = () => {
        createToDo(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                value={title}
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