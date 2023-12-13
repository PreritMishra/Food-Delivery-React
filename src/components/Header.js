import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName,setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser)

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200">
            <div className="logo-container">
                <img className="w-28" src= {LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-5 m-5">
                    <li className="px-4">
                        Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className="px-4">
                        <Link to= "/">Home</Link>
                    </li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li className="px-4">
                        <Link to = "/about">
                            About Us
                        </Link>
                    </li>
                    <li className="px-4">
                        <Link to= "/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to= "/grocery">Grocery</Link>
                    </li>

                    <button className="login" 
                        onClick = {() => {
                            btnName === "Login" 
                                ? setBtnName("Logout")
                                : setBtnName("Login");
                        }}
                    >{btnName}</button>
                </ul>
            </div> 
        </div>
    )
}

export default Header;