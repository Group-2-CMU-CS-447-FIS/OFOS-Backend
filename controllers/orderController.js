const getAllOrders = (req, res) => {
    res.json({orders: "all orders"});
};

const getUserOrders = (req, res) => {
    res.json({orders: "user orders"});
};

const getOrderById = (req, res) => {
    res.json({order: "order id"});
};

const updateOrderPaid = (req, res) => {
    res.json({paid: "paid at 10/3/2023"});
};

const updateOrderDelivered = (req, res) => {
    res.json({delivered: "delivered at 10/3/2023"});
};

const createOrder = (req, res) => {
    res.json({order: "Created"});
};

export {
    getAllOrders,
    getOrderById,
    getUserOrders,
    updateOrderDelivered,
    updateOrderPaid,
    createOrder,
};
