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
            <div>
                <h1>About US</h1>
                <h2> This is Food Delivery App</h2>
                <UserClass name = {"Prerit Mishra"} location = {"Prayagraj"} />
            </div>
        )
    }
}

export default About;