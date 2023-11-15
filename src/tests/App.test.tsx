import {Matcher, SelectorMatcherOptions, fireEvent, render, screen} from "@testing-library/react";
import userEvent, {UserEvent} from "@testing-library/user-event";
import App from "../App";
import {Provider} from "react-redux";
import {store} from "../store/store";

const title = "test";

const addToDo = async (user: UserEvent) => {
    const addPageBtn = screen.getByTestId("addNew");
    await user.click(addPageBtn);
    const input = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, {target: {value: title}});
    const button = screen.getByRole("button");
    fireEvent.click(button);
};

const navigateToList = async (user: UserEvent) => {
    const listPageBtn = screen.getByTestId("listPage");
    await user.click(listPageBtn);
};

describe("Full ToDoItem tests with Redux", () => {
    let htmlContainer: HTMLElement;
    let user: UserEvent;
    let getByTxt: (
      id: Matcher,
      options?: SelectorMatcherOptions | undefined
    ) => HTMLElement;

    beforeEach(() => {
        user = userEvent.setup();

        const {getByText, container} = render(<Provider store={store}>
            <App />
        </Provider>);
        htmlContainer = container;
        getByTxt = getByText;
    });

    test("user can add a to-do and view it", async () => {
        await addToDo(user);
        await navigateToList(user);

        expect(getByTxt(title)).toBeInTheDocument();
    });

    test("user can add a to-do and mark as complete", async () => {
        await navigateToList(user);

        const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

        expect(checkbox.checked).toBe(false);

        fireEvent.click(checkbox);

        expect(checkbox.checked).toBe(true);
    });

    test("user can delete a to-do", async () => {
        await navigateToList(user);

        expect(htmlContainer.querySelector(".title")).toBeInTheDocument();

        const deleteBtn = screen.getByRole("button");

        fireEvent.click(deleteBtn);

        expect(htmlContainer.querySelector(".title")).toBeNull();
    });
});