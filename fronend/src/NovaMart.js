import React, { useState } from 'react'; // Import React and useState
import Footer from './Footer'; 
import { initialProducts, Cart } from './ShopPage'; // Import initial products and Cart component

const NovaMart = () => {
    const [cart, setCart] = useState([]); // State to manage cart items

    // Function to add product to cart
    const addToCart = (product) => {
        const discountedPrice = (product.price * 0.80).toFixed(2);
        setCart((prevCart) => [
            ...prevCart,
            { ...product, discountedPrice }
        ]);
    };

    // Function to remove product from cart
    const removeFromCart = (productId) => {
        console.log("Removing product with ID:", productId); // Debugging line
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    // Function to clear the cart
    const clearCart = () => {
        setCart([]);
    };

    // Function to handle checkout
    const handleCheckout = () => {
        console.log("Proceeding to checkout with the following items:", cart);
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex-grow flex pt-20">
                {/* Main Content Section */}
                <section className="flex-grow p-20 flex flex-col items-center"> 
                    <section className="bg-white p-8 rounded-lg shadow-xl mx-auto max-w-2xl text-center transition-transform transform hover:scale-105 -mt-12">
                        <h1 className="text-3xl font-bold mb-4 text-blue-600">Welcome to NovaMart</h1>
                        <p className="text-lg mb-6">
                            Your premier online store dedicated to providing gamers with the best deals on video games and gaming accessories! Whether you’re
                            a passionate console gamer or a dedicated PC player, we have a wide range of products that cater to all your gaming needs, all at unbeatable prices.
                        </p>
                    </section>
                    
                    {/* Full-Page Products List Section */}
                    <section className="bg-gray-100 flex-grow p-8 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-8 text-center text-black">Featured Products</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                            {initialProducts.slice(0, 10).map(product => (
                                <ProductCard 
                                    key={product.id} 
                                    product={product} 
                                    addToCart={addToCart} 
                                />
                            ))}
                        </ul>
                    </section>
                </section>

                {/* Cart Component Section */}
                <div className="w-1/3 p-4"> {/* Adjust width as needed */}
                    <Cart 
                        cart={cart} 
                        removeFromCart={removeFromCart} 
                        clearCart={clearCart} 
                        onCheckout={handleCheckout} 
                    />
                </div>
            </main>

            <Footer />
        </div>
    );
};

// ProductCard Component for better separation of concerns
const ProductCard = ({ product, addToCart }) => {
    const discountedPrice = (product.price * 0.80).toFixed(2);

    return (
        <li className="flex flex-col items-start p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
            <div className="w-full h-48 overflow-hidden mb-4 rounded-lg">
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain"
                /> 
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center">
                    <span className="font-bold text-lg text-red-600 line-through mr-2">${product.price.toFixed(2)}</span>
                    <span className="font-bold text-lg text-green-600">${discountedPrice}</span>
                </div>
            </div>
            <button 
                onClick={() => addToCart(product)} 
                className="bg-blue-600 text-white rounded px-4 py-2 mt-4 hover:bg-blue-700 transition-colors duration-300 w-full"
            >
                Add to Cart
            </button>
        </li>
    );
};

export default NovaMart;
