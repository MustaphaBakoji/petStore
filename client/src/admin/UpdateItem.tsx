import React, { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MdCloudUpload } from 'react-icons/md';
import { ItemTypes } from '../types/ItemType';
import { useDispatch } from 'react-redux';
import { sethome } from '../redux/admin';

interface NewProduct {
    name: string;

    price: number;
    category: string;
    animalType: string; // new field
    image: string;
}
const ROOT_URL = "https://petstore-des0.onrender.com/api"//vegapp-1.onrender.com"

const UpadateProduct = (props: ItemTypes) => {
    const dispatch = useDispatch()
    const { name, price, imageUrl, category, _id, animalTYpe } = props
    const [product, setProduct] = useState<NewProduct>({
        name: '',

        price: 0,
        category: '',
        animalType: '', // initialize
        image: '',
    });

    const [imagePreview, setImagePreview] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const categories = ['toys', 'food', 'Accessories'];
    const animalTypes = ['dogs', 'cats', 'birds', 'fish'];

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;

                setImagePreview(base64String);
                setProduct((prev) => ({
                    ...prev,
                    image: base64String,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log('Product data:', product);
            const response = await fetch(`${ROOT_URL}/admin/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Product added successfully!');
                // Reset
                setProduct({
                    name: '',

                    price: 0,
                    category: '',
                    animalType: '',
                    image: '',
                });
                setImagePreview('');
                dispatch(sethome())

            } else {
                console.log(`Error: ${result.message || 'Failed to add product'}`);
            }
        } catch (error) {
            console.error('Error adding product:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Add New Pet Product</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Product Name */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Product Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                className="w-full p-2 border border-green-500 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium mb-2 ">Category</label>
                            <select
                                name="category"
                                value={category}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md border-green-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {/* Animal Type */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Animal Type</label>
                            <select
                                name="animalType"
                                value={animalTYpe}
                                onChange={handleInputChange}
                                className=" border-green-500 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            >
                                <option value="">Select Animal Type</option>
                                {animalTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                        {/* Price */}
                        <div>
                            <label className="block text-sm font-medium mb-2">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={price}
                                onChange={handleInputChange}
                                className=" border-green-500 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>




                    {/* Image Upload */}
                    <div>
                        <label className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                            <MdCloudUpload className="w-6 h-6 mr-2 text-green-500" />
                            <span>Upload Image</span>
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={handleImageUpload}


                            />
                        </label>
                        {imagePreview ? (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                                <img src={imagePreview} alt="Preview" className="max-w-[200px] max-h-[200px] object-contain" />
                            </motion.div>
                        ) : <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
                            <img src={imageUrl} alt="Preview" className="max-w-[200px] max-h-[200px] object-contain" />
                        </motion.div>}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'updating  Product...' : 'UPDATE Product'}
                    </motion.button>
                </form>
            </div>
        </motion.div>
    );
};

export default UpadateProduct;