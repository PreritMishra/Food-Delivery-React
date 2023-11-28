import React from "react";
import ReactDOM from "react-dom/client";

//REACT Element
const Heading = (
    <h1 className="head" tabIndex="5">
        React JS
    </h1>
);

//REACT Functional Component
const HeadingComponent = () => (
    <div id="container">
        {Heading}
        <h1 className="heading">Functional Component of REACT</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />); 
