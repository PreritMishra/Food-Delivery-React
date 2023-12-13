import { useDispatch } from "react-redux";
import { FOOD_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch on action
        dispatch(addItem(item))
    }


    return (
        <div>
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                {
                                    item.card.info.price ? " ₹" + item.card.info.price/100 : " ₹" +item.card.info.defaultPrice/100
                                }
                            </span>
                        </div>
                        <p className="font-light text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 relative my-0">
                        
                        {item.card.info.imageId && (
                            <img
                            alt="food_logo"
                            src={FOOD_URL + item.card.info.imageId}
                            />
                        )}
                        <div className="absolute inset-0 flex items-end justify-end">
                            <button className="p-2 w-16 rounded-lg bg-white text-green-300 shadow-lg"
                                onClick={() => handleAddItem(item)}
                            >
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList;