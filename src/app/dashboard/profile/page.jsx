// src/app/dashboard/profile/page.jsx
"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";

const MyProfilePage = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p className="text-center">Loading profile...</p>;
    }

    if (!session) {
        // This case is handled by the layout, but good practice to include
        return <p className="text-center text-red-500">You must be logged in to view this page.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                        {session.user.image ? (
                            <img
                                src={session.user.image}
                                alt={`${session.user.name}'s profile`}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-700"
                            />
                        ) : (
                            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-3xl font-semibold">
                                {session.user.name ? session.user.name.charAt(0) : "?"}
                            </div>
                        )}
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold">{session.user.name}</h2>
                        <p className="text-base-content/70">{session.user.email}</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-xl font-semibold mb-4">Account Information</h3>
                    <ul className="space-y-3">
                        <li>
                            <span className="font-medium">User ID:</span> {session.user.id}
                        </li>
                        <li>
                            <span className="font-medium">Provider:</span> Google (or Credentials)
                        </li>
                        <li>
                            <span className="font-medium">Status:</span> Logged in
                        </li>
                    </ul>
                </div>

                <div className="mt-8 text-center md:text-left">
                    <Link href="/dashboard/settings" className="btn btn-outline">
                        Edit Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;