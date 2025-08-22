import React from 'react';
import Link from 'next/link';

// এখানে mock data ব্যবহার করা হচ্ছে। আপনি এটি আপনার API থেকে fetch করতে পারেন।
const featuredProducts = [
    {
      id: 1,
      name: 'Modern Laptop',
      description: 'A sleek and powerful laptop for all your professional needs. It features a stunning display and long-lasting battery life.',
      price: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b757102b',
    },
    {
      id: 2,
      name: 'Wireless Mouse',
      description: 'Ergonomic and reliable wireless mouse with customizable buttons for a comfortable user experience.',
      price: 45,
      imageUrl: 'https://images.unsplash.com/photo-1579737402868-b7c1e55047b3',
    },
    {
      id: 3,
      name: 'Bluetooth Speaker',
      description: 'Compact and portable speaker with rich bass and clear treble. Perfect for outdoor adventures.',
      price: 99,
      imageUrl: 'https://images.unsplash.com/photo-1596466185854-e6992d952678',
    },
];

const ProductHighlights = () => {
    return (
        <section className="bg-base-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-bold text-base-content mb-12">
                    Our Featured Products
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map(product => (
                        <div key={product.id} className="card bg-base-200 shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title text-2xl">{product.name}</h3>
                                <p className="text-sm text-base-content/70">{product.description}</p>
                                <div className="card-actions justify-between items-center mt-4">
                                    <span className="text-lg font-semibold">${product.price}</span>
                                    <Link href={`/products/${product.id}`} className="btn btn-primary">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductHighlights;