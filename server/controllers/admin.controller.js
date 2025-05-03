import cloudinary from 'cloudinary';
import { productsModel } from '../models/products.models.js';
export let addNewProduct = async (req, res) => {
    let { name, price, image, category, animalType } = req.body
    try {
        let result = await cloudinary.v2.uploader.upload(image, {
            folder: 'products',
            width: 500,
            height: 500,
            crop: 'fill'
        });
        let product = new productsModel({
            name,
            price,
            imageUrl: result.secure_url,
            category,
            animalType
        });
        await product.save();
        return res.status(201).json({
            success: true,
            data: product
        });
    } catch (e) {
        console.log(e);

        return res.status(500).json({
            success: false,
            message: e.message
        });
    }
}


