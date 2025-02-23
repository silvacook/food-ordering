import ChevronDown from "@/components/icons/ChevronDown";
import ChevronUp from "@/components/icons/ChevronUp";
import Plus from "@/components/icons/Plus";
import Trash from "@/components/icons/Trash";
import { useState } from "react";

export default function MenuItemPriceProps({ name, addLabel, props, setProps }) {
    const [isOpen, setIsOpen] = useState(false);

    function addProp() {
        setProps(oldProps => [...(oldProps || []), { name: '', price: 0 }]);
    }

    function editProp(ev, index, prop) {
        const newValue = ev.target.value;

        setProps(prevProps => {
            const newProps = [...(prevProps || [])];
            if (prop === 'price') {
                // Ensure proper number format
                newProps[index][prop] = newValue.replace(/[^0-9.]/g, '');
            } else {
                newProps[index][prop] = newValue;
            }
            return newProps;
        });
    }

    function removeProp(indexToRemove) {
        setProps(prev => (prev || []).filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className="bg-gray-200 p-2 rounded-md mb-2">
            <button
                onClick={() => setIsOpen(prev => !prev)}
                className="inline-flex p-1 border-0 justify-start items-center gap-2"
                type="button"
                aria-expanded={isOpen}
            >
                {isOpen ? <ChevronUp /> : <ChevronDown />}
                <span>{name}</span>
                <span>({props?.length || 0})</span>
            </button>
            <div className={isOpen ? 'block' : 'hidden'}>
                {(props || []).map((size, index) => (
                    <div key={index} className="flex items-end gap-2 mb-2">
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Size name"
                                value={size.name || ''}
                                onChange={ev => editProp(ev, index, 'name')}
                                className="border p-1 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Extra price</label>
                            <input
                                type="text"
                                placeholder="Extra price"
                                value={size.price || ''}
                                onChange={ev => editProp(ev, index, 'price')}
                                className="border p-1 rounded"
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={() => removeProp(index)}
                                className="bg-white mb-2 px-2 py-1 rounded"
                            >
                                <Trash />
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addProp}
                    className="bg-white items-center px-2 py-1 rounded flex gap-2"
                >
                    <Plus />
                    <span>{addLabel}</span>
                </button>
            </div>
        </div>
    );
}
