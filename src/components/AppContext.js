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
    // If quantity is available, multiply by quantity
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
            // Get the product at the specified index
            const productToRemove = prevCartProducts[indexToRemove];
            
            // If it has a quantity greater than 1, just decrease the quantity
            if (productToRemove.quantity && productToRemove.quantity > 1) {
                const newCartProducts = [...prevCartProducts];
                newCartProducts[indexToRemove] = {
                    ...productToRemove,
                    quantity: productToRemove.quantity - 1
                };
                saveCartProductsToLocalStorage(newCartProducts);
                toast.success("Quantity reduced");
                return newCartProducts;
            } else {
                // Otherwise remove the product completely
                const newCartProducts = prevCartProducts
                    .filter((v, index) => index !== indexToRemove);
                saveCartProductsToLocalStorage(newCartProducts);
                toast.success("Product removed");
                return newCartProducts;
            }
        });
    }

    function saveCartProductsToLocalStorage(cartProducts) {
        if(ls) {
            ls.setItem('cart', JSON.stringify(cartProducts));
        }
    }

    function addToCart(product, size=null, extras=[]) {
        setCartProducts(prevProducts => {
            const cartProduct = {...product, size, extras};
            
            // Check if this product (with same size and extras) already exists in the cart
            const existingProductIndex = prevProducts.findIndex(p => 
                p._id === cartProduct._id && 
                JSON.stringify(p.size) === JSON.stringify(size) &&
                JSON.stringify(p.extras) === JSON.stringify(extras)
            );
            
            let newProducts;
            
            if (existingProductIndex !== -1) {
                // If it exists, increase the quantity
                newProducts = [...prevProducts];
                const existingProduct = newProducts[existingProductIndex];
                newProducts[existingProductIndex] = {
                    ...existingProduct,
                    quantity: (existingProduct.quantity || 1) + 1
                };
            } else {
                // If it doesn't exist, add it with quantity 1
                cartProduct.quantity = 1;
                newProducts = [...prevProducts, cartProduct];
            }
            
            saveCartProductsToLocalStorage(newProducts);
            return newProducts;
        });
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