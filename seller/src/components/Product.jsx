import { useState } from "react";
import { Edit, Trash } from "lucide-react";
import AddProduct from "./AddProduct"; // Make sure path is correct

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "T-Shirt", description: "Cotton, comfortable fit", ratings: 4.5, reviews: 120 },
    { id: 2, name: "Jeans", description: "Slim fit, denim", ratings: 4.2, reviews: 85 },
    { id: 3, name: "Sneakers", description: "Sporty, lightweight", ratings: 4.8, reviews: 200 },
    { id: 4, name: "Jacket", description: "Winter wear, waterproof", ratings: 4.7, reviews: 150 },
    { id: 5, name: "Watch", description: "Analog, leather strap", ratings: 4.3, reviews: 95 },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, { ...newProduct, id: Date.now() }]);
    setShowAddForm(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Products</h2>
        {!showAddForm && (
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => setShowAddForm(true)}
          >
            Add New Product
          </button>
        )}
      </div>

      {showAddForm ? (
        <AddProduct
          onAdd={handleAddProduct}
          onCancel={() => setShowAddForm(false)}
        />
      ) : (
        <>
          <div className="hidden md:block">
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4">Product Name</th>
                  <th className="py-2 px-4">Description</th>
                  <th className="py-2 px-4">Ratings</th>
                  <th className="py-2 px-4">Reviews</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-t">
                    <td className="py-2 px-4">{product.name}</td>
                    <td className="py-2 px-4">{product.description}</td>
                    <td className="py-2 px-4">{product.ratings}</td>
                    <td className="py-2 px-4">{product.reviews}</td>
                    <td className="py-2 px-4 flex gap-3">
                      <button className="text-blue-500 hover:text-blue-700">
                        <Edit size={18} />
                      </button>
                      <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(product.id)}>
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {products.map(product => (
              <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="text-sm"><span className="font-bold">Ratings:</span> {product.ratings}</p>
                    <p className="text-sm"><span className="font-bold">Reviews:</span> {product.reviews}</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit size={20} />
                    </button>
                    <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(product.id)}>
                      <Trash size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Product;