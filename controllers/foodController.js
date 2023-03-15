import DummyFood from "../data/food.js";

const getAllProducts = (req, res) => {
    res.json(DummyFood);
};

const getProductByID = (req, res) => {
    const product = DummyFood.find((food) => food.id === req.params.id);

    res.json(product);
};

const getProductByCategory = (req, res) => {
    res.json({
        message: "get products by Category",
    });
};

const createProduct = (req, res) => {
    res.json({product: "product created"});
};

const updateProduct = (req, res) => {
    res.json({product: "product updated"});
};

const deleteProduct = (req, res) => {
    res.json({product: "product deleted"});
};

const createReview = (req, res) => {
    res.json({review: "reviewed"});
};

export {
    getAllProducts,
    getProductByID,
    getProductByCategory,
    createProduct,
    updateProduct,
    deleteProduct,
    createReview,
};
