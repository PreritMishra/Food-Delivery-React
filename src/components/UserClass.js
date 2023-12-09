import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
        //console.log(this.props.name + " Child constructor");
    }
    async componentDidMount() {
        //console.log(this.props.name + " Child component did mount");
        const data = await fetch("https://api.github.com/users/PreritMishra");
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        console.log(json);
    }
    render() {
        const {name,location} = this.props;
        //console.log(this.props.name + " Child Render");
        return (
            <div className="user-card">
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
                <h4>Contact: @comrade_preet10</h4>
            </div>
        );
    }

}

export default UserClass;