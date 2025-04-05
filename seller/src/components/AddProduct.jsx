import { useState } from "react";

const AddProduct = ({ onAdd, onCancel }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    ratings: "",
    reviews: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: "", description: "", image: "", ratings: "", reviews: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md space-y-4"
    >
      <h3 className="text-xl font-semibold">Add New Product</h3>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">Image URL (optional)</label>
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Ratings</label>
          <input
            type="number"
            name="ratings"
            step="0.1"
            min="0"
            max="5"
            value={form.ratings}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium">Reviews</label>
          <input
            type="number"
            name="reviews"
            min="0"
            value={form.reviews}
            onChange={handleChange}
            required
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProduct;