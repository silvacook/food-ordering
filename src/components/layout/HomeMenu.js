'use client'; // Ensure this is at the very top

import SectionHeaders from "@/components/layout/SectionHeaders";
import MenuItem from "@/components/menu/MenuItem";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeMenu() {
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await fetch('/api/menu-items');
                if (!response.ok) {
                    throw new Error('Failed to fetch menu items');
                }
                const menuItems = await response.json();
                if (Array.isArray(menuItems) && menuItems.length > 0) {
                    setBestSellers(menuItems.slice(-6));
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchMenuItems();
    }, []);

    return (
        <section className="">
            <div className="absolute left-0 right-0 w-full justify-start">
                <div className="absolute -left-[280px] -top-[450px] text-left -z-10 transform rotate-[-7deg]"> {/* Rotate slightly */}
                    <Image src='/viral.svg' width={770} height={835} alt='Viral 1' priority />
                </div>
                <div className="absolute -top-[470px] -right-[250px] -z-10 transform rotate-[4deg]"> {/* Rotate slightly in opposite direction */}
                    <Image src='/viral.svg' width={770} height={855} alt='Viral 2' priority />
                </div>
            </div>
            <div className="text-center mb-4 pt-28">
                <SectionHeaders subHeader='Check out' mainHeader='Our Best Sellers' />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
                {bestSellers.length > 0 && bestSellers.map(item => (
                    <MenuItem key={item._id} {...item} />
                ))}
            </div>
        </section>
    );
}