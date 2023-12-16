import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    //(props) => {resName,cuisines}(Destructuring of Object)
    const {resData} = props;
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo } = resData.info || {};
    return (
        <div data-testid='resCard' className="m-5 p-5 w-[250px] rounded-lg bg-gray-100 hover:bg-slate-300">
            <img 
            className="rounded-lg"
            alt="logo" src= { CDN_URL
            + cloudinaryImageId
            }/>
            <h2 className= "font-bold py-4 text-lg">{name}</h2>
            <h4>Cuisines: {cuisines.join(", ")}</h4>
            <h4>Avg Rating: {avgRating}</h4>
            <h4>{costForTwo}</h4>
            
        </div>
    );
}
 
//Higher Order Component

//input - RestaurantCard => Restaurant card Promoted

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
         return (
            <div>
                <label className="p-2 m-2 absolute text-white rounded-lg">
                    Promoted
                </label>
                <RestaurantCard  {...props}/>
            </div>
         );
    }
}

export default RestaurantCard;