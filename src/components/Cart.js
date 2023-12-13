import { useDispatch, useSelector } from "react-redux"
import ItemList from './ItemList';
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }



  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">CART</h1>
      <div className="w-6/12 m-auto">
        <button className="p-2 m-2 rounded-lg bg-green-300 text-white"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <div>
          <h2 className="text-2xl">Cart is Empty!! Order your food!!!</h2>
          <button className="p-2 m-2 rounded-lg bg-green-300 text-white">
            <Link to= "/">Order Now</Link>
          </button>
        </div>
        <ItemList items={cartItems} />
      </div>
    </div>
  )
} 

export default Cart;
