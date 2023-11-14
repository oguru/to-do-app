import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";

import ToDoItem from "../components/ToDoItem/ToDoItem";

describe("ToDoItem tests", () => {

    const title = "test";
    const onToggle = jest.fn((id) => {
        return id;
    });
    const onRemove = jest.fn();

    beforeEach(() => {
        render(<ToDoItem
            id={1}
            title={title}
            completed={false}
            onToggle={onToggle}
            onRemove={onRemove}
        />);
    });

    it("should render the correct title", () => {
        const currentTitle = screen.getByText(title);

        expect(currentTitle).toBeInTheDocument();
    });

    //    it("should toggle the checkbox when it is clicked", () => {
    //       const checkbox = screen.getByRole("checkbox") as HTMLInputElement;

    //       expect(checkbox.checked).toEqual(false);

    //       fireEvent.click(checkbox);

    //       expect(checkbox.checked).toEqual(true);

    //    });

    it("should call onToggle when the checkbox is clicked", () => {
        const checkbox = screen.getByRole("checkbox");

        fireEvent.click(checkbox);

        expect(onToggle).toBeCalled();
    });

    // it should call onRemove when button is clicked
    it("should call onRemove when button is clicked", () => {
        const button = screen.getByRole("button");

        fireEvent.click(button);

        expect(onRemove).toBeCalled();
    });

    //    it("should toggle the checkbox when the space key is pressed", () => {
    //       const user = userEvent.setup();
    //       const checkbox = screen.getByRole("checkbox");

    //       user.type(checkbox, "{space}", [{skipClick: true}]);

    //       expect(onToggle).toBeCalledWith(1);
    //    });

});