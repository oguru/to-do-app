import {Route, Routes, Link, BrowserRouter as Router} from "react-router-dom";
import AddToDo from "./pages/AddToDo/AddToDo";
import ToDoList from "./pages/ToDoList/ToDoList";
import styles from "./App.module.scss";

const App = () => {
    const routes = [
        {
            path: "/",
            name: "My List",
            component: <ToDoList />
        },
        {
            path: "/create",
            name: "Add New",
            component: <AddToDo />
        }
    ];

    return (
        <>
            <Router>
                <header className={styles.header}>
                    <h1>My To-Do List</h1>
                    <nav>
                        {routes.map(route => (
                            <Link
                                key={route.name}
                                to={route.path}
                            >
                                {route.name}
                            </Link>
                        ))}
                    </nav>
                </header>
                <Routes>
                    {routes.map(route => {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={route.component}
                            />
                        );
                    })}
                </Routes>
            </Router>
        </>
    );
};

export default App;
