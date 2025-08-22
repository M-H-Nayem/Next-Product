import React from 'react';

const AboutPage = () => {

  

    return (
        <main className="container mx-auto p-8">
            <section className="text-center my-12">
                <h1 className="text-5xl font-bold mb-4 text-base-content">About Our Website</h1>
                <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
                    Welcome to our simple e-commerce application. We are dedicated to providing
                    high-quality products and a seamless shopping experience. Our mission is to
                    make your online shopping easy, secure, and enjoyable.
                </p>
            </section>

            <section className="my-12">
                <h2 className="text-3xl font-semibold text-center text-base-content mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Example Team Member Card */}
                    <div className="card bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="rounded-full w-32 h-32 object-cover"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h3 className="card-title">Jane Doe</h3>
                            <p className="text-sm text-base-content/70">Lead Developer</p>
                        </div>
                    </div>
                    {/* Add more team member cards here */}
                </div>
            </section>

            <section className="my-12 text-center">
                <h2 className="text-3xl font-semibold text-base-content mb-4">Our Vision</h2>
                <p className="text-base-content/80 max-w-3xl mx-auto">
                    To become a leading platform in the e-commerce industry by consistently innovating
                    and delivering exceptional value to our customers. We believe in transparency,
                    reliability, and building lasting relationships with everyone we serve.
                </p>
            </section>
        </main>
    );
};

export default AboutPage;