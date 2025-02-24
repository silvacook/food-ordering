"use client"; // Add this line to mark the component as a Client Component

import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero md:mt-4">
            <div className="py-8 md:py-12">
                <h1 className="text-4xl font-semibold">
                    Everything<br />
                    is better <br /> 
                    with a&nbsp; 
                    <span className="text-orange-600">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Pizza is the missing piece that makes everyday 
                    complete, a simple yet delicious joy in life.
                </p>
                <div className="flex gap-4 text-sm">
                    <button 
                        className="flex justify-center bg-orange-600 items-center gap-2 text-white px-4 
                        py-2 rounded-full uppercase"
                    >
                        Order now
                        <Right />
                    </button>
                    <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative hidden md:block w-full h-64"> {/* Parent div for the image */}
                <Image 
                    src="/pizza.png" 
                    fill // Ensure your Next.js version supports this
                    style={{ objectFit: "contain" }} // Use objectFit for filling the parent
                    alt="Delicious Pizza" // Descriptive alt text
                />
            </div>
        </section>
    );
}
