import EditableImage from "@/components/layout/EditableImage";
import { useEffect, useState } from "react";
import MenuItemPriceProps from "@/components/layout/MenuItemPriceProps";

export default function MenuItemForm({ onSubmit, menuItem }) {
  // Ensure menuItem is defined or provide an empty object as a fallback
  const validMenuItem = menuItem || {
    image: '',
    name: '',
    description: '',
    basePrice: '',
    sizes: [],
    extraIngredientsPrices: [],
    category: '',
  };

  // Initialize state with default values, using optional chaining to avoid errors
  const [image, setImage] = useState(validMenuItem.image || '');
  const [name, setName] = useState(validMenuItem.name || '');
  const [description, setDescription] = useState(validMenuItem.description || '');
  const [basePrice, setBasePrice] = useState(validMenuItem.basePrice || '');
  const [sizes, setSizes] = useState(validMenuItem.sizes || []);
  const [extraIngredientsPrices, setExtraIngredientsPrices] = useState(validMenuItem.extraIngredientsPrices || []);
  const [category, setCategory] = useState(validMenuItem.category || '');
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/categories")
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch categories');
        return res.json();
      })
      .then(data => {
        setCategories(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch categories:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const formattedSizes = sizes.map(size => ({
      ...size,
      price: parseFloat(size.price) || 0,
    }));
    const formattedIngredients = extraIngredientsPrices.map(ingredient => ({
      ...ingredient,
      price: parseFloat(ingredient.price) || 0,
    }));

    onSubmit(ev, {
      image,
      name,
      description,
      basePrice: parseFloat(basePrice) || 0,
      sizes: formattedSizes,
      extraIngredientsPrices: formattedIngredients,
      category,
    });
  };

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto">
      <div className="md:grid items-start gap-4" style={{ gridTemplateColumns: '.3fr .7fr' }}>
        <div>
          <EditableImage link={image} setLink={setImage} />
        </div>
        <div className="grow">
          <label>Item name</label>
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
            className="w-full block my-2 p-2 border border-gray-300 rounded-md"
          />
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            className="w-full block my-2 p-2 border border-gray-300 rounded-md"
          />
          <label>Category</label>
          <select
            value={category}
            onChange={ev => setCategory(ev.target.value)}
            required
            className="w-full block my-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select a category</option>
            {categories.map(c => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
          <label>Base price</label>
          <input
            type="number"
            value={basePrice}
            onChange={(ev) => setBasePrice(ev.target.value)}
            required
            min="0"
            step="0.01"
            className="w-full block my-2 p-2 border border-gray-300 rounded-md"
          />
          <MenuItemPriceProps
            name={'Sizes'}
            addLabel={'Add item size'}
            props={sizes}
            setProps={setSizes}
          />
          <MenuItemPriceProps
            name={'Extra ingredients'}
            addLabel={'Add ingredients prices'}
            props={extraIngredientsPrices}
            setProps={setExtraIngredientsPrices}
          />
          <button type="submit" className="bg-blue-500 text-white mt-4 px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
