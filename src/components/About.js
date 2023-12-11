import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
    constructor(props) {
        super(props);
        //console.log(" Parent Constructor")
    }

    componentDidMount() {
        //console.log("Parent  component did mount");
    }
    render() {
        //console.log("Parent render")
        return (
            <div className="m-4 p-4 text-center text-xl">
                <h1 className="font-bold text-3xl">About US</h1>
                <h2> This is Food Delivery App</h2>
                <UserClass />
            </div>
        )
    }
}

export default About;