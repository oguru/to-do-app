import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import AddToDo from "../pages/AddToDo/AddToDo";
import userEvent, {UserEvent} from "@testing-library/user-event";
import {Provider} from "react-redux";
import {store} from "../store/store";

describe("AddToDo tests", () => {
    const title = "test";

    beforeEach(() => {
        render(<Provider store={store}>
            <AddToDo />
        </Provider>);
    });

    it("should clear the input after submitting the to-do item", () => {
        const input = screen.getByRole("textbox") as HTMLInputElement;

        fireEvent.change(input, {target: {value: title}});

        expect(input.value).toEqual(title);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(input.value).toEqual("");
    });

    it("should refocus the input after ssubmitting the to-do item", () => {
        const input = screen.getByRole("textbox") as HTMLInputElement;

        expect(input).not.toHaveFocus();

        fireEvent.change(input, {target: {value: title}});

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(input).toHaveFocus();
    });
});
