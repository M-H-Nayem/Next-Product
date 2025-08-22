"use client";
import { useSession } from "next-auth/react";

const DashboardPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Show a loading state while fetching session data
    return (
      <main className="flex justify-center items-center min-h-[80vh]">
        <div className="text-xl font-semibold">Loading dashboard...</div>
      </main>
    );
  }

  // The 'useSession' hook will automatically handle redirection
  // if the user is not authenticated, as it's a client component.
  // The provider you set up handles this.

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Your Dashboard, {session?.user?.name}!
        </h1>
        <p className="text-lg text-base-content/80 mb-6">
          This is a protected page. You can manage your account and products here.
        </p>

        <div className="stats stats-vertical lg:stats-horizontal shadow-lg">
          <div className="stat">
            <div className="stat-title">Registered Users</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
          </div>
          <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>

        <div className="mt-12">
          {session?.user?.image && (
            <img
              src={session.user.image}
              alt="User profile"
              className="w-24 h-24 rounded-full mx-auto"
            />
          )}
          <p className="mt-4 text-base-content/70">
            You are logged in with: {session?.user?.email}
          </p>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;