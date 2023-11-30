import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

const Body = () => {
    //local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterdList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 3.7
                        );
                        setListOfRestaurant(filterdList);
                        console.log(filterdList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="restaurant-container">
              {
                listOfRestaurant.map((restaurant) => {
                  return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                })
              }
            </div>
        </div>
    )
}

export default Body;