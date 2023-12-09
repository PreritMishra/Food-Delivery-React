import { useEffect } from "react";


const User = ({name}) => {
    useEffect(() => {},[]);

    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: Pryagraj</h3>
            <h4>Contact: @comrade_preet10</h4>
        </div>
    );
}

export default User;