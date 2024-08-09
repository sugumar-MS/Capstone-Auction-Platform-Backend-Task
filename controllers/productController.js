
// controllers/productController.js
const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
  const { name, description, startingBid, seller } = req.body;
  try {
    const product = new Product({
      name,
      description,
      startingBid,
      seller
    });
    await product.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (err) {
    console.error('Error creating product:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
