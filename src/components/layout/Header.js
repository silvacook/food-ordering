'use client';

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react"; // Added useEffect
import ShoppingCart from "@/components/icons/ShoppingCart";
import Bars2 from "@/components/icons/Bars2";
import { CartContext } from "@/components/AppContext";
import Image from "next/image";

function AuthLinks({ status, userName }) {
  if (status === 'authenticated') {
    return (
      <>
        <Link 
          href={'/profile'} 
          className="whitespace-nowrap"
        >
          Hello, {userName}
        </Link>
        <button
          onClick={() => signOut()}
          className="bg-[#9e473b] rounded-full text-white px-8 py-2"
        >
          Logout
        </button>
      </>
    );
  }
  if (status === 'unauthenticated') {
    return (
      <>
        <Link href={'/login'}>Login</Link>
        <Link 
          href={'/register'} 
          className="bg-[#9e473b] rounded-full text-white px-8 py-2"
        >
          Register
        </Link>
      </>
    );
  }
}

export default function Header() {
  const { data: session, status } = useSession(); // Destructure session
  const [userName, setUserName] = useState(null); // Use state to manage userName
  const { cartProducts } = useContext(CartContext);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      let name = session.user.name || session.user.email;
      if (name && name.includes(' ')) {
        name = name.split(' ')[0];
      }
      setUserName(name);
    } else {
        setUserName(null);
    }
  }, [status, session]); // Run effect when status or session changes

  return (
    <header>
      {/* Mobile Header */}
      <div className="flex items-center md:hidden justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo-libe.png" 
            alt="ST PIZZA Logo" 
            width={120} 
            height={50}
            className="object-contain"
          />
        </Link>
        <div className="flex gap-8 items-center">
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#9e473b] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartProducts.length}
              </span>
            )}
          </Link>
          <button
            className="p-1 border"
            onClick={() => setMobileNavOpen(prev => !prev)}>
            <Bars2 />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="md:hidden p-4 bg-gray-200 rounded-lg mt-2 flex flex-col gap-2 text-center">
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>Menu</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact</Link>
          <AuthLinks status={status} userName={userName} />
        </div>
      )}

      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between">
        <nav className="flex items-center gap-8 text-gray-500 font-semibold">
          <Link href={'/'} className="flex items-center">
            <Image 
              src="/logo-libe.png" 
              alt="ST PIZZA Logo" 
              width={120} 
              height={50}
              className="object-contain"
            />
          </Link>
          <Link href={'/'}>Home</Link>
          <Link href={'/menu'}>All Fragrances</Link>
          <Link href={'/#about'}>About</Link>
          <Link href={'/#contact'}>Contact Us</Link>
        </nav>
        <nav className="flex items-center gap-4 text-gray-500 font-semibold">
          <AuthLinks status={status} userName={userName} />
          <Link href={'/cart'} className="relative">
            <ShoppingCart />
            {cartProducts?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#9e473b] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartProducts.length}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}