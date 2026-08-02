import User from "../models/User.js";

export const getCurrentUser = async (req, res) => {

  try {

    const user = await User.findById(
      req.user.id
    ).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

export const upgradePlan = async (req, res) => {

  try {

    const { plan } = req.body;

    const user = await User.findById(
      req.user.id
    );

    if (!user) {

      return res.status(404).json({
        success: false,
        message: "User not found",
      });

    }

    if (plan === "basic") {

      user.subscription = "Basic";
      user.credits += 100;

    }

    else if (plan === "pro") {

      user.subscription = "Pro";
      user.credits += 500;

    }

    else if (plan === "enterprise") {

      user.subscription = "Enterprise";
      user.credits += 5000;

    }

    await user.save();

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};