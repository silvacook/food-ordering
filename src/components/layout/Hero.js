"use client"; // Add this line to mark the component as a Client Component

import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero md:mt-4">
            <div className="py-8 md:py-12">
                <h1 className="text-4xl font-semibold">
                    Everything&apos;s<br />
                    better with<br /> 
                    a touch of&nbsp;
                    <span className="text-[#9e473b]">
                        Fragrance
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Discover your signature scent affordably. Our 1ml glass spray vials deliver authentic, high-quality perfumes—perfect
                    for trying before committing to full bottles. Experience luxury fragrances one spritz at a time.
                </p>
                <div className="flex gap-4 text-sm">
                    <button 
                        className="flex justify-center bg-[#9e473b] items-center gap-2 text-white px-4 
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
            <div className="relative hidden md:block w-full h-96">
                <Image 
                    src="/virals.svg" 
                    fill
                    style={{ objectFit: "contain" }}
                    alt="Delicious Pizza"
                />
            </div>
        </section>
    );
}