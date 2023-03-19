import jwt from "jsonwebtoken";

const genToken = (id) => {
    const token = jwt.sign(id, process.env.PRIVATE_KEY);
    return token;
};

export default genToken;
