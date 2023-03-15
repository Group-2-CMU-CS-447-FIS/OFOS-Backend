import User from "../models/User";

const register = (req, res) => {
    res.json({user: "registered"});
};

const login = (req, res) => {
    res.json({user: "logined"});
};

const getAllUsers = (req, res) => {
    res.json({users: "all users"});
};

const getUserProfile = (req, res) => {
    res.json({user: "profile"});
};

const updateUserProfile = (req, res) => {
    res.json({user: "user updated"});
};

const updateUser = (req, res) => {
    res.json({user: "user updated admin"});
};

const deleteUser = (req, res) => {
    res.json({user: "user deleted"});
};

export {
    getAllUsers,
    getUserProfile,
    register,
    login,
    updateUser,
    updateUserProfile,
    deleteUser,
};
