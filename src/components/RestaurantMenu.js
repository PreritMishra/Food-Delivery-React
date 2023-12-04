import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { FOOD_URL, MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL +
            resId 
        );
        const json = await data.json();
        setResInfo(json.data);
    }
    if(resInfo === null){
        return <Shimmer />
    } 
    const {name,cuisines,areaName,costForTwoMessage} = 
        resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

  return  (
    <div className="menu">
        <div>
            <h1>{name}</h1>
            <h6>{cuisines}</h6>
            <h6>{areaName}</h6>
        </div>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) => (
            <li key={item.card.info.id}>{item.card.info.name} - {"₹" + (item.card.info.price)/100} <h5>{item.card.info.description}</h5>
             {item.card.info.imageId && (
                <img
                  alt="food_logo"
                  src={FOOD_URL + item.card.info.imageId}
                />
              )}</li>
           ))}
        </ul>
      
    </div>
  );
}

export default RestaurantMenu
