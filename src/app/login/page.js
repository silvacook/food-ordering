"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [logInProgress, setLoginProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginProgress(true);
       
        await signIn("credentials", { email, password, callbackUrl: "/" });

        setLoginProgress(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-orange-600 text-4xl mb-4">
                Login
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input 
                    type="email" 
                    placeholder="email" 
                    name="email"
                    value={email}
                    disabled={logInProgress} 
                    onChange={ev => setEmail(ev.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="password" 
                    value={password}
                    name="password"
                    disabled={logInProgress}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button type="submit" disabled={logInProgress}>Login</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button
                    type="button" 
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className="flex gap-4 justify-center">
                    { // Check if the image path is valid
                        <Image 
                            src={"/google.png"} 
                            alt="Google Logo" 
                            width={24} 
                            height={24} 
                        />
                    }
                    Login with Google
                </button>
            </form>
        </section>
    );
}
