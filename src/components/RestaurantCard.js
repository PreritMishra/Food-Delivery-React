import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //(props) => {resName,cuisines}(Destructuring of Object)
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo } = props.resData.info;

    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="logo" src= { CDN_URL
            + cloudinaryImageId
            }/>
            <h3>{name}</h3>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <h4>Avg Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    )
}

export default RestaurantCard;