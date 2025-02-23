'use client';

import { CartContext, cartProductPrice } from "@/components/AppContext";
import SectionHeaders from "@/components/layout/SectionHeaders";
import { useContext, useEffect, useState } from "react";
import AddressInputs from "@/components/layout/AddressInputs";
import { useProfile } from "@/components/UseProfile";
import toast from "react-hot-toast";
import CartProduct from "../../components/menu/CartProduct";

export default function CartPage() {
    const { cartProducts, removeCartProduct } = useContext(CartContext);
    const [address, setAddress] = useState({});
    const { data: profileData } = useProfile();

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (window.location.href.includes('canceled=1')) {
                toast.error("Payment failed 😞");
            }
        }
    }, []);

    useEffect(() => {
        if (profileData?.city) {
            const { phone, streetAddress, city, postalCode, country } = profileData;
            const addressFromProfile = {
                phone,
                streetAddress,
                city,
                postalCode,
                country
            };
            setAddress(addressFromProfile);
        }
    }, [profileData]);

    let subtotal = 0;
    for (const p of cartProducts) {
        subtotal += cartProductPrice(p);
    }

    function handleAddressChange(propName, value) {
        setAddress(prevAddress => ({
            ...prevAddress,
            [propName]: value
        }));
    }

    async function proceedToCheckout(ev) {
        ev.preventDefault();
        
        const promise = new Promise((resolve, reject) => {
            fetch("/api/checkout", {
                method: 'POST',
                headers: {"Content-Type" : "application/json" },
                body: JSON.stringify({
                    address,
                    cartProducts,
                })
            }).then(async(response) => {
                if (response.ok) {
                    resolve();
                    const data = await response.json();
                    window.location = data.url;
                } else {
                    reject();
                }
            });
        });
    
        await toast.promise(promise, {
            loading: "Preparing your order...",
            success: "Redirecting to payment...",
            error: "Something went wrong... Please try again later", 
        });
    }

    if(cartProducts?.length === 0) {
        return (
            <section className="mt-8 text-center px-4">
                <SectionHeaders mainHeader="Cart" />
                <p className="mt-4">Your shopping cart is empty</p>
            </section>
        );
    }

    return (
        <section className="mt-8 px-4">
            <div className="text-center">
                <SectionHeaders mainHeader="Cart" />
            </div>

            <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2">
                <div>
                    {cartProducts?.length === 0 && (
                        <div>No products in your shopping cart</div>
                    )}

                    {cartProducts?.length > 0 && cartProducts.map((product, index) => (
                        <CartProduct 
                            key={index}
                            index={index}
                            product={product} 
                            onRemove={removeCartProduct} 
                        />
                    ))}

                    <div className="py-4 flex justify-end items-center pr-4">
                        <div className="text-gray-500">
                            Subtotal:<br />
                            Delivery:<br />
                            Total:
                        </div>
                        <div className="text-lg font-semibold pl-2 text-right">
                            ${subtotal}<br />
                            $5<br />
                            ${subtotal + 5}
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                    <form onSubmit={proceedToCheckout}>
                        <AddressInputs 
                            addressProps={address}
                            setAddressProp={handleAddressChange}
                        />
                        <button 
                            type="submit"
                            className="bg-orange-500 text-white w-full py-2 px-4 rounded-md mt-4 font-semibold"
                        >
                            Pay ${subtotal+5}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}