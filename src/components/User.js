import { useEffect } from "react";


const User = ({name}) => {
    useEffect(() => {},[]);

    return (
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h2>Name: {name}</h2>
            <h3>Location: Pryagraj</h3>
            <h4>Contact: @comrade_preet10</h4>
        </div>
    );
}

export default User;