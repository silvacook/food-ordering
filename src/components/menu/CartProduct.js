import {cartProductPrice} from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import Image from "next/image";

export default function CartProduct({product, onRemove, index, quantity}) {
    const handleQuantityDecrease = () => {
        onRemove(index);
    };
    
    return (
        <div className="flex items-center gap-4 border-b py-4">
            <div className="w-24">
                {product.image ? (
                    <Image
                        width={240}
                        height={240}
                        src={product.image || "/default-image.png"}
                        alt={product.name || "Product Image"}
                    />
                ) : (
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center">
                        No Image Available
                    </div>
                )}
            </div>
            
            <div className="grow">
                <h3 className="font-semibold">
                    {product.name}
                    {quantity > 1 && (
                        <span className="text-gray-500 ml-2 text-lg">×{quantity}</span>
                    )}
                </h3>
                
                {product.size && (
                    <div className="text-sm">
                        Size: <span>{product.size.name}</span>
                    </div>
                )}
                
                {product.extras?.length > 0 && (
                    <div className="text-sm text-gray-500">
                        {product.extras.map((extra, extraIndex) => (
                            <div key={extraIndex}>
                                {extra.name} +${extra.price}
                            </div>
                        ))}
                    </div>
                )}
                
                {quantity > 1 && (
                    <div className="mt-2 flex items-center">
                        <button 
                            onClick={handleQuantityDecrease}
                            className="px-2 py-1 bg-gray-100 rounded-md text-sm hover:bg-gray-300 transition duration-200"
                        >
                            Lower quantity
                        </button>
                    </div>
                )}
            </div>
            
            <div className="text-lg font-semibold">
                ${cartProductPrice(product)}
            </div>
            {!!onRemove && (
                <div className="ml-2">
                    <button
                        type="button"
                        onClick={() => onRemove(index)}
                        className="p-2"
                    >
                        <Trash />
                    </button>
                </div>
            )}
        </div>
    );
}