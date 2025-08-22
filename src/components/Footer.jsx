import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-base-content py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <Link href="/" className="text-2xl font-bold">
                            Hunt Pro
                        </Link>
                        <p className="mt-4 text-sm text-base-content/80">
                            A modern e-commerce application built with Next.js and Tailwind CSS.
                            We offer a wide range of products just for you.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h6 className="footer-title">Quick Links</h6>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/about" className="link link-hover">About Us</Link></li>
                            <li><Link href="/contact" className="link link-hover">Contact</Link></li>
                            <li><Link href="/blog" className="link link-hover">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Product Categories */}
                    <div>
                        <h6 className="footer-title">Products</h6>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/products?category=electronics" className="link link-hover">Electronics</Link></li>
                            <li><Link href="/products?category=apparel" className="link link-hover">Apparel</Link></li>
                            <li><Link href="/products?category=home" className="link link-hover">Home & Garden</Link></li>
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div>
                        <h6 className="footer-title">Follow Us</h6>
                        <div className="flex gap-3 mt-4">
                            {/* Social Media Icons - Placeholder */}
                            <a href="#" aria-label="Facebook" className="hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.58-1.333h2.42v-4h-3.824c-3.414 0-4.176 3.097-4.176 4.975v2.025z"></path></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.163-2.72-.951.564-2.005.974-3.127 1.195-.898-.957-2.178-1.555-3.594-1.555-3.084 0-5.584 2.499-5.584 5.584 0 .436.049.859.135 1.264-4.646-.234-8.756-2.458-11.51-5.823-.479.827-.751 1.794-.751 2.823 0 1.948.995 3.674 2.506 4.697-.925-.03-1.793-.28-2.555-.705v.074c0 2.71 1.932 4.966 4.512 5.485-.47.129-.964.195-1.472.195-.36 0-.712-.034-1.054-.1.714 2.238 2.79 3.874 5.25 3.916-1.928 1.503-4.358 2.404-7.006 2.404-.456 0-.903-.027-1.342-.078 2.49 1.59 5.449 2.529 8.652 2.529 10.384 0 16.068-8.627 16.068-16.069 0-.246-.005-.489-.013-.733.901-.667 1.687-1.498 2.313-2.448z"></path></svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.642 19.8h-3.358v-10.749h3.358v10.749zm-1.642-12.748c-.911 0-1.65-.739-1.65-1.65 0-.911.738-1.65 1.65-1.65s1.65.739 1.65 1.65c0 .911-.739 1.65-1.65 1.65zm13.142 12.748h-3.357v-5.618c0-1.332-.023-2.664-.047-3.996h-.047c-.552-1.025-1.923-1.25-2.755-1.25-.83 0-1.637.23-2.227.818-.59.587-1.022 1.347-1.29 2.28-1.57 5.09-1.57 10.18-1.57 10.18h-3.357v-10.749h3.357v1.547c.73-.918 1.77-1.583 3.013-1.583 2.158 0 3.708 1.405 3.708 4.414v6.371z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-base-content/10 mt-8 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} My Project. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;