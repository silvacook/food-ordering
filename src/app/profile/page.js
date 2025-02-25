"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";
import UserTabs from "@/components/layout/UserTabs";
import UserForm from "@/components/layout/UserForm";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [profileFetched, setProfileFetched] = useState(false);

  useEffect(() => {
    // Initialize from localStorage if available
    const storedUser = localStorage.getItem("userProfile");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAdmin(JSON.parse(storedUser).admin);
      setProfileFetched(true);
    }

    // Fetch from API if authenticated
    if (status === "authenticated" && session?.user?.name) {
      fetch("/api/profile")
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          setIsAdmin(data.admin);
          setProfileFetched(true);
          // Store in localStorage
          localStorage.setItem("userProfile", JSON.stringify(data));
        });
    }
  }, [session, status]);

  // Re-fetch data when window regains focus
  useEffect(() => {
    const handleFocus = () => {
      if (status === "authenticated" && session?.user?.name) {
        fetch("/api/profile")
          .then((response) => response.json())
          .then((data) => {
            setUser(data);
            setIsAdmin(data.admin);
            // Update localStorage
            localStorage.setItem("userProfile", JSON.stringify(data));
          });
      }
    };

    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [session, status]);

  async function handleProfileInfoUpdate(ev, data) {
    ev.preventDefault();
    const savingPromise = new Promise(async (resolve, reject) => {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) resolve();
      else reject();
    });

    await toast.promise(savingPromise, {
      loading: "Saving...",
      success: "Profile saved!",
      error: "Error",
    });
  }

  if (status === "loading" || !profileFetched) {
    return "Loading...";
  }

  if (status === "unauthenticated") {
    return redirect("/login");
  }

  return (
    <section className="mt-8">
      <UserTabs isAdmin={isAdmin} />
      <div className="max-w-2xl mx-auto mt-8">
        <UserForm user={user} onSave={handleProfileInfoUpdate} />
      </div>
    </section>
  );
}