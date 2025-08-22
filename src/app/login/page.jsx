"use client";
import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/products");
        }
    }, [session, status, router]);

    if (status === "loading") {
        return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
    }

    const handleCredentialLogin = async (e) => {
        e.preventDefault();
        setError('');

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false, // এটি গুরুত্বপূর্ণ যাতে স্বয়ংক্রিয়ভাবে রিডাইরেক্ট না হয়
        });

        if (result?.error) {
            setError(result.error);
        } else {
            // সফল লগইনের পর NextAuth স্বয়ংক্রিয়ভাবে সেশন আপডেট করবে
            // এবং useEffect হুকটি ইউজারকে /products পেজে রিডাইরেক্ট করবে
        }
    };

    return (
        <main className="flex items-center justify-center min-h-[90vh] bg-base-100 ">
            <div className="card w-full max-w-md bg-base-200 shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-base-content">
                    Login to Your Account
                </h1>
                
                {error && (
                    <div className="alert alert-error mb-4">
                        {error === "CredentialsSignin" ? "Invalid email or password." : error}
                    </div>
                )}
                
                <form onSubmit={handleCredentialLogin}>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="input input-bordered w-full"
                            value={email}
                            disabled
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="********"
                            className="input input-bordered w-full"
                            value={password}
                            disabled
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button disabled type="submit" className="btn btn-primary w-full mb-4">
                        Login
                    </button>
                </form>

                <div className="divider">OR</div>

                <button 
                    className="btn btn-outline w-full"
                    onClick={() => signIn("google")}
                >
                    Continue with Google
                </button>

                <div className="mt-6 text-center text-sm">
                    Don't have an account? <Link href="/register" className="link link-primary">Register here</Link>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;