"use client";

import { SessionProvider } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export function cartProductPrice(cartProduct) {
    let price = cartProduct.basePrice;
    if (cartProduct.size) {
        price += cartProduct.size.price;
    }
    if(cartProduct.extras?.length > 0) {
        for(const extra of cartProduct.extras) {
            price += extra.price;
        }
    }
    return price * (cartProduct.quantity || 1);
}

export function AppProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    const ls = typeof window !== "undefined" ? window.localStorage : null;

    useEffect(() => {
        if(ls && ls.getItem("cart")) {
            setCartProducts( JSON.parse(ls.getItem("cart")))
        }
    }, [ls]);

    function clearCart() {
        setCartProducts([]);
        saveCartProductsToLocalStorage([]);
    }

    function removeCartProduct(indexToRemove) {
        setCartProducts(prevCartProducts => {
            const newConstProducts = prevCartProducts
                .filter((v, index) => index !== indexToRemove);
            saveCartProductsToLocalStorage(newConstProducts);
            return newConstProducts; 
        });
        toast.success("Product removed");
    }

    function saveCartProductsToLocalStorage(cartProducts) {
        if(ls) {
            ls.setItem('cart', JSON.stringify(cartProducts));
        }
    }

    function addToCart(product, size=null, extras=[], quantity=1) {
        setCartProducts(prevProducts => {
            const cartProduct = {...product, size, extras, quantity};
            const newProducts = [...prevProducts, cartProduct];
            saveCartProductsToLocalStorage(newProducts);
            return newProducts;
        });
        
        // Show success toast with quantity
        toast.success(`${quantity} ${product.name} added to cart!`);
    }
    
    return (
        <SessionProvider>
            <CartContext.Provider value={{
                cartProducts,
                setCartProducts,
                addToCart,
                removeCartProduct,
                clearCart,
            }}>
            {children}
            </CartContext.Provider>
        </SessionProvider>
    )
}