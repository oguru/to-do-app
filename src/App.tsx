import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import AddToDo from "./pages/AddToDo/AddToDo";
import ToDoList from "./pages/ToDoList/ToDoList";
import {Route, Routes, Link, BrowserRouter as Router} from "react-router-dom";

const App = () => {
    const routes = [
        {
            path: "/",
            name: "list",
            component: <ToDoList />
        },
        {
            path: "/create",
            name: "create",
            component: <AddToDo />
        }
    ];

    return (
        <div className="App">
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
        </div>
    );
};

export default App;
