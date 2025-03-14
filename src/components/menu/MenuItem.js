import { CartContext } from "@/components/AppContext";
import MenuItemTile from "@/components/menu/MenuItemTile";
import Image from "next/image";
import { useContext, useState } from "react";
import FlyingButton from "react-flying-item";

export default function MenuItem(menuItem) {
    const {
        image = '/path/to/default/image.png', 
        name,
        description,
        basePrice,
        sizes = [],
        extraIngredientPrices = [],
    } = menuItem;

    const [selectedSize, setSelectedSize] = useState(sizes.length > 0 ? sizes[0] : null);
    const [selectedExtras, setSelectedExtras] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useContext(CartContext);

    function increaseQuantity() {
        setQuantity(prev => prev + 1);
    }

    function decreaseQuantity() {
        setQuantity(prev => (prev > 1 ? prev - 1 : 1));
    }

    async function handleAddToCartButtonClick() {
        const hasOptions = sizes.length > 0 || extraIngredientPrices.length > 0;

        if (hasOptions && !showPopup) {
            setShowPopup(true);
            return;
        }

        if (addToCart) {
            addToCart(menuItem, selectedSize, selectedExtras, quantity);
            await new Promise(resolve => setTimeout(resolve, 1000));
            setShowPopup(false);
            setQuantity(1); // Reset quantity after adding to cart
        } else {
            console.error("addToCart function is not available");
        }
    }

    function handleExtraThingClick(ev, extraThing) {
        const checked = ev.target.checked;
        if (checked) {
            setSelectedExtras(prev => [...prev, extraThing]);
        } else {
            setSelectedExtras(prev => prev.filter(e => e.name !== extraThing.name));
        }
    }

    let selectedPrice = basePrice || 0;
    if (selectedSize) {
        selectedPrice += selectedSize.price || 0;
    }
    if (selectedExtras.length > 0) {
        for (const extra of selectedExtras) {
            selectedPrice += extra.price || 0;
        }
    }

    // Calculate total price based on quantity
    const totalPrice = (selectedPrice * quantity).toFixed(2);

    return (
        <>
            {showPopup && (
                <div onClick={() => setShowPopup(false)} className="fixed inset-0 bg-black/80 flex items-center justify-center">
                    <div onClick={ev => ev.stopPropagation()} className="my-8 bg-white p-4 rounded-lg max-w-md">
                        <div className="overflow-y-scroll pr-1" style={{ maxHeight: 'calc(100vh - 100px)' }}>
                            <Image src={image} alt={name} width={300} height={200} className="mx-auto" />
                            <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
                            <p className="text-center text-gray-500 text-sm mb-2">{description}</p>
                            {sizes.length > 0 && (
                                <div className="py-2">
                                    <h3 className="text-center text-gray-700">Pick your size</h3>
                                    {sizes.map(size => (
                                        <label key={size._id} className="flex items-center gap-2 p-4 border rounded-md mb-1">
                                            <input
                                                type="radio"
                                                onChange={() => setSelectedSize(size)}
                                                checked={selectedSize?.name === size.name}
                                                name="size" />
                                            {size.name} ${basePrice + size.price}
                                        </label>
                                    ))}
                                </div>
                            )}
                            {extraIngredientPrices.length > 0 && (
                                <div className="py-2">
                                    <h3 className="text-center text-gray-700">Any extras?</h3>
                                    {extraIngredientPrices.map(extraThing => (
                                        <label key={extraThing._id} className="flex items-center gap-2 p-4 border rounded-md mb-1">
                                            <input
                                                type="checkbox"
                                                onChange={ev => handleExtraThingClick(ev, extraThing)}
                                                checked={selectedExtras.map(e => e._id).includes(extraThing._id)}
                                                name={extraThing.name} />
                                            {extraThing.name} +${extraThing.price}
                                        </label>
                                    ))}
                                </div>
                            )}
                            
                            {/* Enhanced Quantity Selection UI */}
                            <div className="py-2">
                                <h3 className="text-center text-gray-700 font-bold mb-2">Quantity</h3>
                                <div className="flex items-center justify-center gap-4 mt-2">
                                    <button 
                                        type="button" 
                                        onClick={decreaseQuantity}
                                        className="bg-red-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-red-600 transition-colors shadow-md flex items-center justify-center"
                                    >
                                        -
                                    </button>
                                    <span className="text-xl w-8 text-center font-bold">{quantity}</span>
                                    <button 
                                        type="button" 
                                        onClick={increaseQuantity}
                                        className="bg-green-500 text-white w-8 h-8 rounded-full text-lg font-bold hover:bg-green-600 transition-colors shadow-md flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Fixed button container with no extra padding */}
                            <div className="mt-4 pb-2">
                                <FlyingButton targetTop={'5%'} targetLeft={'65%'} src={image}>
                                    <button 
                                        className="w-full bg-[#9e473b] text-white px-6 py-3 rounded-full font-bold text-center hover:bg-[#c95b4d] transition-colors shadow-md"
                                        onClick={handleAddToCartButtonClick}
                                    >
                                        Add to cart ${totalPrice}
                                    </button>
                                </FlyingButton>
                                <button 
                                    className="w-full mt-1 text-red-800 hover:text-red-800 py-2 border border-red-800 rounded-full" 
                                    onClick={() => setShowPopup(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <MenuItemTile onAddToCart={handleAddToCartButtonClick} {...menuItem} />
        </>
    );
}