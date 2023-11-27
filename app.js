import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
    "div",
    {id: "child"},
    [React.createElement("h1", {}, "Hello Nhi RAM RAM BHAI"), 
    React.createElement("h1", {}, "RAM RAM BHAI")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);