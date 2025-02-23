"use client";

import UserTabs from "@/components/layout/UserTabs";
import {useProfile} from "@/components/UseProfile";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const {loading, data} = useProfile();

    useEffect(() => {
        fetch("/api/users")
            .then(async response => {
                if (!response.ok) {
                    const errorData = await response.text();
                    throw new Error(`API Error: ${response.status} - ${errorData}`);
                }
                return response.json();
            })
            .then(users => setUsers(users))
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('Failed to load users. Please try again later.');
            });
    }, []);

    if(loading) {
        return "Loading user info...";
    }

    if(!data?.admin) {
        return "Not an admin";
    }

    return (
        <section className="max-w-2xl mx-auto mt-8">
            <UserTabs isAdmin={true} />
            {error && (
                <div className="bg-red-100 border 
                border-red-400 text-red-700 px-4 py-3 flex rounded mb-4" role="alert">
                    <span className="block sm:inline">
                        {error}
                    </span>
                </div>
            )}
            <div className="mt-8">
                {users?.length > 0 ? (
                    users.map(user => (
                        <div 
                            key={user.email} 
                            className="bg-gray-100 rounded-lg
                             mb-2 p-1 flex items-center justify-between"
                        >
                            <div className="grid grid-col-2 flex-col">
                                <span className="font-medium">
                                    {user.name}
                                </span>
                                <span className="text-sm text-gray-600">
                                    {user.email}
                                </span>
                            </div>
                            <div>
                                <Link
                                    href={"/users/"+user._id} 
                                    className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))
                ) : !error && (
                    <div className="text-center text-gray-500">No users found</div>
                )}
            </div>
        </section>
    );
}