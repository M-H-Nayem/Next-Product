import { getProducts } from '@/lib/products'; // Mock data থেকে পণ্যগুলো ইম্পোর্ট করা হয়েছে
import { notFound } from 'next/navigation';

const ProductDetailsPage = async ({ params }) => {
    // URL থেকে পণ্যের ID নেওয়া হচ্ছে
    const productId = parseInt(params.id);

    // সব পণ্য ফেচ করে নির্দিষ্ট পণ্যটি খোঁজা হচ্ছে
    const products = await getProducts();
    const product = products.find(p => p.id === productId);

    // যদি পণ্যটি খুঁজে না পাওয়া যায়, তাহলে 404 পেজে রিডাইরেক্ট করা হবে
    if (!product) {
        notFound();
    }

    return (
        <div className="flex w-full h-[90vh] justify-center items-center "><main className="container mx-auto px-4 py-12">
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure className="lg:w-1/2">
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
                    />
                </figure>
                <div className="card-body p-8 lg:w-1/2">
                    <h1 className="card-title text-4xl font-bold mb-2">
                        {product.name}
                    </h1>
                    <p className="text-xl font-semibold text-primary mb-4">
                        ${product.price}
                    </p>
                    <p className="text-lg text-base-content/80 mb-6">
                        {product.description}
                    </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary btn-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </main></div>
    );
};

export default ProductDetailsPage;