import {fireEvent, render, screen} from "@testing-library/react";
import {act} from 'react-dom/test-utils';
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantList.json";
import "@testing-library/jest-dom";

//faking fetch request
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant list with text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);

   const searchBtn = screen.getByRole("button", {name: "Search"});

   const searchInput = screen.getByTestId("searchInput");

   fireEvent.change(searchInput, {target: {value: "Curry"}});
   fireEvent.click(searchBtn);

//   //screen should load card

   const cardsAfterSearch = screen.getAllByTestId("resCard");
   expect(cardsAfterSearch.length).toBe(1);
});
