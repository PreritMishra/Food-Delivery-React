import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from '../RestaurantMenu';
import Header from '../Header';
import MOCK_DATA from '../mocks/mockResMenu.json';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import '@testing-library/jest-dom';
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
);

it("Should load restaurant menu component", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </Provider>
            </BrowserRouter>
        )
    )

    const accordionHeader = screen.getByText("Super Saver Combo (25)");
    fireEvent.click(accordionHeader);
    const item = screen.getAllByTestId("foodItem");
    expect(item.length).toBe(25);

    const addBtn = screen.getAllByRole("button", {name: "ADD"});
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItem").length).toBe(27);
})