import React from "react";

const ProductCard = ({ imageUrl, title, description, productUrl }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <div className="h-48 overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={productUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
      >
        View product details
      </a>
    </div>
  </div>
);

const Products = () => {
  const products = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Dinero Bill Pay App & Website",
      description:
        "A seamless bill payment solution designed for convenience and reliability.",
      productUrl: "https://yourwebsite.com/products/ux-design-system",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      title: "Dynamic Sponsorship Website",
      description:
        " A digital sponsorship platform connecting brands and opportunities",
      productUrl: "https://yourwebsite.com/products/ux-design-system",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
