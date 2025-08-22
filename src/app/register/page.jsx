"use client";
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!name || !email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        try {
            // Here you would typically send data to your backend API route for registration
            // For this assignment, we'll just simulate a successful registration
            console.log('Registering with:', { name, email, password });

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSuccess('Registration successful! You can now log in.');

            // Clear form fields
            setName('');
            setEmail('');
            setPassword('');

        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <main className="flex items-center justify-center min-h-[90vh] bg-base-100">
            <div className="card w-full max-w-md bg-base-200 shadow-xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-base-content">
                    Create an Account
                </h1>
                
                <form onSubmit={handleRegister}>
                    {error && <div className="alert alert-error mb-4">{error}</div>}
                    {success && <div className="alert alert-success mb-4">{success}</div>}

                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            value={name}
                            disabled
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    
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
                        Register
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
                    Already have an account? <Link href="/login" className="link link-primary">Login here</Link>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;