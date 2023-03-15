const DummyOrder = [
    {
        id: "1",
        userId: "1",
        items: [
            {
                id: "1",
                name: "Pepperoni Pizza",
                qty: 2,
                price: 40,
            },
            {
                id: "3",
                name: "Coca Cola",
                qty: 1,
                price: 5,
            },
        ],
        address: "somewhere else",
        isPaid: true,
        isDelivered: false,
        paidAt: "someday",
        deliveredAt: "",
    },
];

export default DummyOrder;
