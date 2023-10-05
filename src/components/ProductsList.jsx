import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, removeProduct } from "../productsSlice";
import { fetchProducts } from "../productThunk";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import UpdateProductModal from "./UpdateProduct";
import { AiOutlinePlus } from "react-icons/ai";
import AddProductModal from "./ProductForm";
const ProductList = () => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState(null);

  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    setModalMode("update");
  };
  const openAddModal = () => {
    setAddModalOpen(true);
  };
  const openDescriptionModal = (product) => {
    setSelectedProduct(product);
    setModalMode("description");
  };
  const closeModal = () => {
    setSelectedProduct(null);
    setModalMode(null);
  };
  const closeAddModal = () => {
    setAddModalOpen(false);
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleRemove = (id) => {
      dispatch(removeProduct(id));
  };
  
  return (
    <div  id="products">
      <div>
        <h2 className="text-3xl font-semibold mb-4 ">Product List</h2>{" "}
        <span
          onClick={openAddModal}
          className="flex align-middle mb-12 justify-center mx-auto"
        >
          {" "}
          <AiOutlinePlus
            size={25}
            className="mt-2 border rounded-xl p-1  bg-gray-100 border-gray-400 text-gray-700"
          />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          
            <div
              key={product.id}
              className="flex flex-col h-min w-56 p-1 border-box bg-white rounded xl"
            >
              <div className="w-64 h-80  mr-3 relative z-60 mb-2 group transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:shadow-inner   duration-300">
                <img
                  src={product.image}
                  onClick={() => openDescriptionModal(product)}
                  className="flex cover rounded flex-col w-ful w-full h-56 "
                ></img>
                <div className="absolute top-[58%] bg-white right-5 left-5  border justify-center shadow-sm element-to-hide hidden group-hover:block">
                  <div className="flex justify-center p-2">
                    <button>
                      <AiOutlineDelete
                        onClick={() => handleRemove(product.id)}
                        className="mr-1"
                        size={20}
                      ></AiOutlineDelete>
                    </button>
                    <a>
                      <AiOutlineEdit
                        onClick={() => openUpdateModal(product)}
                        className="mr-1"
                        size={20}
                      ></AiOutlineEdit>
                    </a>
                  </div>
                </div>
                <div
                  className=" 
                text-sm bottom-2  mb-2 text-black font-extrabold "
                >
                  <p className="text-center">{product.name}</p>
                  <p className="text-center mt-2 text-gray-500">
                    ${product.price.toFixed(2)}{" "}
                  </p>
                </div>
              </div>
            </div>
        
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <UpdateProductModal
            product={selectedProduct}
            onClose={closeModal}
            mode={modalMode}
          />
        </div>
      )}
      {isAddModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <AddProductModal onClose={closeAddModal} />
        </div>
      )}
    </div>
  );
};

export default ProductList;
