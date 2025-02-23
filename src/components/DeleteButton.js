import { useState } from "react";

export default function DeleteButton({label, onDelete}) {
    const [showConfirm, setShowConfirm] = useState(false);

    if(showConfirm) {
        return (
            <div className="fixed bg-black/80 inset-0 flex items-center 
            h-full justify-center">
                <div className="bg-white p-4 rounded-lg">
                    <h4>Are you sure you want to delete?</h4>
                    <div className="flex gap-2 mt-1">
                        <button 
                            type="button" 
                            onClick={() => setShowConfirm(false)}
                            className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => {
                                onDelete(); 
                                setShowConfirm(false);
                            }} 
                            type="button" 
                            className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-md"
                        >
                            Yes,&nbsp;delete!
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <button 
            type="button" 
            onClick={() => setShowConfirm(true)}
        >
            {label}
        </button>
    );
}