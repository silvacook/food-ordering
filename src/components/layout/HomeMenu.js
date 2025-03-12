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