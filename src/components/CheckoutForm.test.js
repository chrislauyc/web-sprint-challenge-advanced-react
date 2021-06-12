import React from "react";
import { render,  screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    
    userEvent.type(screen.getByTestId("firstName"),"firstName");
    userEvent.type(screen.getByTestId("lastName"),"lastName");
    userEvent.type(screen.getByTestId("address"),"address");
    userEvent.type(screen.getByTestId("city"),"city");
    userEvent.type(screen.getByTestId("state"),"state");
    userEvent.type(screen.getByTestId("zip"),"zip");
    userEvent.click(screen.getByTestId("checkout"));

    expect(screen.getByTestId("successMessage")).toBeInTheDocument();
    
});
