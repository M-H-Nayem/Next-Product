// src/app/dashboard/add-product/page.jsx
"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

const AddProductPage = () => {
    const { data: session, status } = useSession();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [message, setMessage] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        // Basic form validation
        if (!name || !description || !price || !imageUrl) {
            setMessage("Please fill out all fields.");
            return;
        }

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, description, price: parseFloat(price), imageUrl, userId: session.user.id }),
            });

            if (res.ok) {
                setMessage("Product added successfully!");
                // Clear the form
                setName("");
                setDescription("");
                setPrice("");
                setImageUrl("");
            } else {
                const data = await res.json();
                setMessage(data.error || "Failed to add product.");
            }
        } catch (error) {
            console.error("Error adding product:", error);
            setMessage("An error occurred. Please try again.");
        }
    };

    if (status === "loading") {
        return <p className="text-center">Loading...</p>;
    }
    
    // This is handled by the layout, but kept here for clarity
    if (status === "unauthenticated") {
        return <p className="text-center text-red-500">You must be logged in to add a product.</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Add New Product</h1>
            <p className="mb-6">Fill out the form below to add a new product to your store.</p>
            
            {message && (
                <div className={`alert ${message.includes("successfully") ? "alert-success" : "alert-error"} mb-4`}>
                    {message}
                </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g., Mechanical Keyboard"
                        className="input input-bordered w-full"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered w-full"
                        placeholder="A brief description of the product"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="e.g., 99.99"
                        className="input input-bordered w-full"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input
                        type="url"
                        placeholder="e.g., https://example.com/image.jpg"
                        className="input input-bordered w-full"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProductPage;