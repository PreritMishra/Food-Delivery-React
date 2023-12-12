import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    //local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterdRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    console.log(listOfRestaurant)
    useEffect(()=>{
        fetchData();
    }, []);    
    const fetchData = async()=> {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4529334&lng=81.8348882&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Looks like you are offline!! Please Check your internet connection</h1>

    //conditional rendering

    return listOfRestaurant.length === 0 ? ( <Shimmer /> ): (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value)
                        }
                    }/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                    onClick={() => {
                        const filterdRestaurant = listOfRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filterdRestaurant);
                    }}>Search</button>
                </div>
                <div className="top-rated m-4 p-4 flex items-center">
                <button
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                        const filterdList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setFilteredRestaurant(filterdList)
                    }}
                >
                    Top Rated Restaurant
                </button>
                </div>
            </div>
            <div className="flex flex-wrap">
              {
                filterdRestaurant.map((restaurant) => {
                  return <Link
                   key={restaurant.info.id}
                   to={"/restaurants/" + restaurant.info.id}>
                    {/**if the restaurant is promoted then add a pomoted label to it */
                        restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) : (<RestaurantCard resData={restaurant} />)
                    }
                    </Link>;
                })
              }
            </div>
        </div>
    )
}

export default Body;