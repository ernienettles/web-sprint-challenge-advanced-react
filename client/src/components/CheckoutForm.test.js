import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { findByTestId } = render(<CheckoutForm />)

    const header = findByTestId(/header/i);

    expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", () => {

    const { findByTestId, getByTestId } = render(<CheckoutForm />)

    const firstNameInput = getByTestId(/firstname/i);
    const lastNameInput = getByTestId(/lastname/i);
    const addressInput = getByTestId(/address/i);
    const cityInput = getByTestId(/city/i);
    const stateInput = getByTestId(/state/i);
    const button = getByTestId(/button/i);
    const successMessage = findByTestId(/successmessage/i);

    fireEvent.change(firstNameInput, { target: { value: 'Ernie' } });
    fireEvent.change(lastNameInput, { target: { value: 'Nettles' } });
    fireEvent.change(addressInput, { target: { value: '123 6th St' } });
    fireEvent.change(cityInput, { target: { value: 'Jacksonville' } });
    fireEvent.change(stateInput, { target: { value: 'Florida' } });
    fireEvent.click(button)

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(addressInput).toBeInTheDocument();
    expect(cityInput).toBeInTheDocument();
    expect(stateInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(successMessage).toBeTruthy();


});
