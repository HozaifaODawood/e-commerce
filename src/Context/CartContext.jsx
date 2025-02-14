import { createContext, useContext } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";


export const CartContext = createContext()

export default function CartContextProvider({ children }) {

    const { token } = useContext(UserContext);

    let headers = {
        token
    }

    async function addProductToCart(id) {
        try {
            const response = await axios.post("https://ecommerce.routemisr.com/api/v1/cart", {
                "productId": id
            }, {
                headers
            });
            return response;
        } catch (error) {
            return error.message;
        }
    }


    async function getUserCart() {
        try {
            const response = await axios.get("https://ecommerce.routemisr.com/api/v1/cart", {
                headers
            });
            return response;
        } catch (error) {
            return error.message;
        }
    }


    async function removeProductFromCart(pId) {
        try {
            const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`, {
                headers
            });
            return response;
        } catch (error) {
            return error.message;
        }
    }


    async function updateProductQty(pId, count) {
        try {
            const response = await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${pId}`, {
                count
            }, {
                headers
            });
            return response;
        } catch (error) {
            return error.message;
        }
    }


    async function clearCart() {
        try {
            const response = await axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
                headers
            });
            return response;
        } catch (error) {
            return error.message;
        }
    }


    async function checkOutSession(cId, shippingAddress) {
        try {
            const response = await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cId}?url=http://localhost:5173`, {
                "shippingAddress": shippingAddress
        }, {
            headers
        });
        return response;
        } catch (error) {
            return error.message;
        }
    }


    return <CartContext.Provider value={{ addProductToCart, getUserCart, removeProductFromCart, updateProductQty, clearCart, checkOutSession }} >
        {children}
    </CartContext.Provider>
}