import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import ToDoItem from "../components/ToDoItem/ToDoItem";

describe("ToDoItem tests", () => {

    const title = "test";
    const mockOnToggle = jest.fn((id) => id);
    const mockOnRemove = jest.fn((id) => id);
    let htmlContainer: HTMLElement;
    let reRender: (ui: React.ReactElement<
      any,
      string | React.JSXElementConstructor<any>
    >) => void;

    beforeEach(() => {
        const {container, rerender} = render(<ToDoItem
            id={1}
            title={title}
            completed={false}
            onToggle={mockOnToggle}
            onRemove={mockOnRemove}
        />);
        htmlContainer = container;
        reRender = rerender;
    });

    it("should render the correct title", () => {
        const currentTitle = screen.getByText(title);

        expect(currentTitle).toBeInTheDocument();
    });

    it("should call onToggle when the checkbox is clicked", () => {
        const checkbox = screen.getByRole("checkbox");

        fireEvent.click(checkbox);

        expect(mockOnToggle).toBeCalledWith(1);
    });

    it("should call onRemove when button is clicked", () => {
        const button = screen.getByRole("button");

        fireEvent.click(button);

        expect(mockOnRemove).toBeCalled();
    });

    it("should apply the correct classname if an item is checked", () => {
        expect(htmlContainer.querySelector(".completed")).toBeNull();

        reRender(<ToDoItem
            id={1}
            title={title}
            completed={true}
            onToggle={mockOnToggle}
            onRemove={mockOnRemove}
        />);

        expect(htmlContainer.querySelector(".completed")).toBeInTheDocument();
    });
});