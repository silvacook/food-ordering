import {cartProductPrice} from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import Image from "next/image";

export default function CartProduct({product, onRemove, index, quantity}) {
    return (
        <div className="flex items-center gap-4 border-b py-4">
            <div className="w-24">
                {product.image ? (
                    <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={240} 
                        height={240} 
                        className="w-full h-auto" 
                    />
                ) : (
                    <div className="bg-gray-200 p-4 rounded w-full h-24 flex items-center justify-center text-gray-500 text-sm">
                        No Image Available
                    </div>
                )}
            </div>
            
            <div className="flex-grow">
                <div className="font-semibold">
                    {product.name}
                </div>
                
                {quantity > 1 && (
                    <div className="text-sm font-normal text-gray-500">
                        Quantity: <span className="font-bold">x{quantity}</span>
                    </div>
                )}
                
                {product.size && (
                    <div className="text-sm text-gray-500">
                        Size: {product.size.name}
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
            </div>
            
            <div className="font-semibold">
                ${cartProductPrice(product)}
            </div>
            
            {!!onRemove && (
                <button 
                    onClick={() => onRemove(index)}
                    className="p-2"
                >
                    <Trash />
                </button>
            )}
        </div>
    );
}