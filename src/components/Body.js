import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    //local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterdRestaurant,setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

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
    
    //conditional rendering

    return listOfRestaurant.length === 0 ? ( <Shimmer /> ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={
                        (e) => {
                            setSearchText(e.target.value)
                        }
                    }/>
                    <button onClick={() => {
                        const filterdRestaurant = listOfRestaurant.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filterdRestaurant);
                    }}>Search</button>
                </div>

                <button
                    className="filter-btn"
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
            <div className="restaurant-container">
              {
                filterdRestaurant.map((restaurant) => {
                  return <Link
                   key={restaurant.info.id}
                   to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>;
                })
              }
            </div>
        </div>
    )
}

export default Body;