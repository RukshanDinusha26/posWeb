import React, { useState, useEffect } from "react";
import axios from "axios";

const OrderForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = (product) => {
    setSelectedProducts([...selectedProducts, { productId: product._id, quantity: 1 }]);
    setTotalAmount(totalAmount + product.price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = localStorage.getItem("userId"); // Assuming you store userId in localStorage
      await axios.post("http://localhost:5000/api/orders", { products: selectedProducts, userId });
      alert("Order created successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Create Order</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl mb-2">Products</h3>
          {products.map((product) => (
            <div key={product._id} className="bg-white p-4 rounded shadow-md mb-2">
              <h4>{product.name}</h4>
              <p>Price: ${product.price}</p>
              <button
                onClick={() => handleAddProduct(product)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Add to Order
              </button>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-xl mb-2">Order Summary</h3>
          <div className="bg-white p-4 rounded shadow-md">
            <p>Total Amount: ${totalAmount}</p>
            <button onClick={handleSubmit} className="bg-green-500 text-white p-2 rounded mt-2">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;