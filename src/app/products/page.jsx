import React from 'react';
import Link from 'next/link';
import { getProducts } from '@/lib/products'; // আমাদের Mock Backend থেকে ডেটা ইম্পোর্ট করা হয়েছে

const ProductsPage = async () => {
  const products = await getProducts(); // সার্ভার কম্পোনেন্টে ডেটা ফেচ করা হচ্ছে

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-base-content">
        Explore Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product.id} className="card bg-base-200 shadow-xl">
            <figure>
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">{product.name}</h2>
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
    </main>
  );
};

export default ProductsPage;