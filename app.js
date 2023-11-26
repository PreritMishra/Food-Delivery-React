const heading = React.createElement(
    "div",
    {id: "child"},
    [React.createElement("h1", {}, "Hello Brother"), 
    React.createElement("h1", {}, "RAM RAM BHAI")]
);   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);