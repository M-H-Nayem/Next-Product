import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content text-center text-base-content">
        <div className="max-w-7xl">
          <h1 className="text-5xl font-bold">Your Ultimate E-commerce Destination</h1>
          <p className="py-6">
            Explore a vast collection of high-quality products. From the latest gadgets to
            everyday essentials, find everything you need in one place.
          </p>
          <Link href="/products" className="btn btn-primary btn-lg">
            Explore Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;