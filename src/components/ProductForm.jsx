import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../productsSlice";    
import { v4 as uuidv4 } from 'uuid';
import noimage from '../../public/no-image.jpg'


const AddProductModal = ({ onClose }) => {
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const id = uuidv4();
    if (newProductName && newProductPrice) {
      const newProduct = {
        name: newProductName,
        price: parseFloat(newProductPrice),
        id:id,
        image: noimage
      };
      console.log('Dispatching addProducts');
      dispatch(addProduct(newProduct));
      onClose();
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <label className="block mb-2">Product Name:</label>
      <input
        type="text"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        className="border p-2 rounded-md mb-2"
      />
      <label className="block mb-2">Product Price:</label>
      <input
        type="text"
        value={newProductPrice}
        onChange={(e) => setNewProductPrice(e.target.value)}
        className="border p-2 rounded-md mb-4"
      />
      <div className="flex justify-center">
        <button
          onClick={handleAddProduct}
          className="bg-green-500 text-white p-2 rounded-md  block hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Add Product
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 block text-white p-2 rounded-md ml-2 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
