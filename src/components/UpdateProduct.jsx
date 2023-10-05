import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../productsSlice";

const UpdateProductModal = ({ product, onClose, mode }) => {
  const [updatedProductName, setUpdatedProductName] = useState(product.name);
  const [updatedProductPrice, setUpdatedProductPrice] = useState(
    product.price.toString()
  );
  const dispatch = useDispatch();

  const handleUpdate = () => {
    const updatedProduct = {
      name: updatedProductName,
      price: parseFloat(updatedProductPrice),
      image:product.image,
    };
    console.log('Dispatching updateProducts');

    dispatch(updateProduct({ id: product.id, updatedProduct }));
    onClose();
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
      {mode === "update" && (
        <>
          <label className="block mb-2">Updated Name:</label>
          <input
            type="text"
            value={updatedProductName}
            onChange={(e) => setUpdatedProductName(e.target.value)}
            className="border p-2 rounded-md mb-2"
          />
          <label className="block mb-2">Updated Price:</label>
          <input
            type="text"
            value={updatedProductPrice}
            onChange={(e) => setUpdatedProductPrice(e.target.value)}
            className="border p-2 rounded-md mb-4"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white p-2 rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Update Product
          </button>
        </>
      )}
      {mode === "description" && (
        <div>
          <img
            src={product.image}
            className="flex cover rounded flex-col mx-auto h-56 "
          ></img>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <p className="mb-4">{product.description}</p>
        </div>
      )}

      <button
        onClick={onClose}
        className="bg-red-500 text-white p-2 rounded-md ml-2 hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Close
      </button>
    </div>
  );
};

export default UpdateProductModal;
