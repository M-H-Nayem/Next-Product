export const getProducts = async () => {
  // এখানে একটি async ফাংশন তৈরি করা হয়েছে
  // বাস্তব প্রজেক্টে, আপনি এখানে একটি API কল করবেন
  const products =
  [
    {
      "id": 1,
      "name": "Modern Laptop",
      "description": "A sleek and powerful laptop for all your professional needs. It features a stunning display and long-lasting battery life.",
      "price": 1200,
      "imageUrl": "https://cdn.pixabay.com/photo/2016/11/29/06/17/laptop-1867140_1280.jpg",
      "addedBy": "your-user-id-here"
    },
    {
      "id": 2,
      "name": "Wireless Mouse",
      "description": "Ergonomic and reliable wireless mouse with customizable buttons for a comfortable user experience.",
      "price": 45,
      "imageUrl": "https://cdn.pixabay.com/photo/2015/05/20/19/33/mouse-775618_1280.jpg",
      "addedBy": "your-user-id-here"
    },
    {
      "id": 3,
      "name": "Bluetooth Speaker",
      "description": "Compact and portable speaker with rich bass and clear treble. Perfect for outdoor adventures.",
      "price": 99,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/08/17/14/06/speaker-2651478_1280.jpg",
      "addedBy": "your-user-id-here"
    },
    {
      "id": 4,
      "name": "Mechanical Keyboard",
      "description": "A durable mechanical keyboard with satisfying clicky keys, ideal for gaming and typing.",
      "price": 150,
      "imageUrl": "https://cdn.pixabay.com/photo/2016/09/06/20/39/keyboard-1650394_1280.jpg",
      "addedBy": "your-user-id-here"
    },
    {
      "id": 5,
      "name": "Smartphone",
      "description": "The latest smartphone with a cutting-edge camera and powerful processor. Stay connected everywhere.",
      "price": 899,
      "imageUrl": "https://cdn.pixabay.com/photo/2017/07/31/22/07/smartphone-2561570_1280.jpg",
      "addedBy": "your-user-id-here"
    },
    {
      "id": 6,
      "name": "Gaming Headset",
      "description": "Immersive sound quality and a built-in microphone. Get an edge in your online games with this headset.",
      "price": 75,
      "imageUrl": "https://cdn.pixabay.com/photo/2016/11/29/12/30/game-1869820_1280.jpg",
      "addedBy": "your-user-id-here"
    }
]

  // ডেটা ফেচ করতে একটু সময় লাগে তা বোঝানোর জন্য একটি কৃত্রিম বিলম্ব (artificial delay) যোগ করা হয়েছে
//   await new Promise((resolve) => setTimeout(resolve, 1000));
  
  return products;
};