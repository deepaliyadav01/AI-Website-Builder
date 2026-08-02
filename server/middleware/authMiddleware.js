import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {

  try {

    let token = req.headers.authorization;

    // CHECK TOKEN
    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // REMOVE Bearer
    token = token.split(" ")[1];

    // VERIFY TOKEN
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // FIND USER
    req.user = await User.findById(decoded.id).select("-password");

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token",
    });

  }
};

export default protect;