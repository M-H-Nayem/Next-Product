// src/app/dashboard/manage-products/page.jsx
"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const ManageProductsPage = () => {
    const { data: session, status } = useSession();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch user-specific products from the backend
    useEffect(() => {
        const fetchProducts = async () => {
            if (status === "authenticated" && session?.user?.id) {
                try {
                    const res = await fetch(`/api/products?userId=${session.user.id}`);
                    if (!res.ok) {
                        throw new Error("Failed to fetch products");
                    }
                    const data = await res.json();
                    setProducts(data.products);
                } catch (err) {
                    console.error(err);
                    setError("Failed to load products. Please try again later.");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchProducts();
    }, [status, session]);

    // Handle product deletion
    const handleDelete = async (productId) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            const res = await fetch(`/api/products/${productId}`, {
                method: "DELETE",
            });

            if (res.ok) {
                // Remove the deleted product from the state
                setProducts(products.filter((product) => product._id !== productId));
            } else {
                const data = await res.json();
                alert(`Failed to delete product: ${data.error}`);
            }
        } catch (err) {
            console.error("Error deleting product:", err);
            alert("An error occurred while deleting the product.");
        }
    };

    if (status === "loading" || loading) {
        return <p className="text-center">Loading products...</p>;
    }

    if (status === "unauthenticated" || !session?.user?.id) {
        return <p className="text-center text-red-500">You must be logged in to manage products.</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Manage Your Products</h1>
            {products.length === 0 ? (
                <p className="text-center text-xl text-gray-500">You have not added any products yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full border-separate border-spacing-y-2">
                        <thead>
                            <tr className="bg-gray-200 dark:bg-gray-700">
                                <th className="p-4 rounded-tl-lg rounded-bl-lg">Product Name</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Date Added</th>
                                <th className="p-4 rounded-tr-lg rounded-br-lg text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id} className="bg-white dark:bg-gray-800 shadow">
                                    <td className="p-4 font-semibold">{product.name}</td>
                                    <td className="p-4">${product.price}</td>
                                    <td className="p-4">{new Date(product.createdAt).toLocaleDateString()}</td>
                                    <td className="p-4 text-center">
                                        <div className="flex gap-2 justify-center">
                                            {/* Link to an edit page (you can implement this later) */}
                                            <Link href={`/dashboard/edit-product/${product._id}`} className="btn btn-sm btn-ghost">
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product._id)}
                                                className="btn btn-sm btn-error"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageProductsPage;