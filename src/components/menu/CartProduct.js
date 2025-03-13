import {cartProductPrice} from "@/components/AppContext";
import Trash from "@/components/icons/Trash";
import Image from "next/image";

export default function CartProduct({product, onRemove, index, quantity}) {
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
                </h3>
                
                {quantity > 1 && (
                    <div className="text-sm font-bold text-gray-600 mt-1">
                        x{quantity}
                    </div>
                )}
                
                {product.size && (
                    <div className="text-sm mt-1">
                        Size: <span>{product.size.name}</span>
                    </div>
                )}
                
                {product.extras?.length > 0 && (
                    <div className="text-sm text-gray-500 mt-1">
                        {product.extras.map((extra, extraIndex) => (
                            <div key={extraIndex}>
                                {extra.name} +${extra.price}
                            </div>
                        ))}
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