import Shimmer from "./Shimmer";
import { FOOD_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null){
        return <Shimmer />
    } 
    const {name,cuisines,areaName,costForTwoMessage} = 
        resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

  return  (
    <div className="menu-info">
        <div>
            <h1>{name}</h1>
            <h6>{cuisines}</h6>
            <h6>{areaName}</h6>
        </div>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul className="menu">
            {itemCards.map((item) => (
            <li key={item.card.info.id} className="menu-items"><div>{item.card.info.name} - {"₹" + (item.card.info.price)/100} <h5>{item.card.info.description}</h5></div>
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
