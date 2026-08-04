import User from "../models/User.js";

// =========================
// GET CURRENT USER
// =========================
export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {

    console.error("Get Current User Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// =========================
// UPGRADE USER PLAN
// =========================
export const upgradePlan = async (req, res) => {
  try {

    const { plan } = req.body;

    if (!plan) {
      return res.status(400).json({
        success: false,
        message: "Plan is required.",
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    switch (plan.toLowerCase()) {

      case "basic":
        user.subscription = "Basic";
        user.credits += 100;
        break;

      case "pro":
        user.subscription = "Pro";
        user.credits += 500;
        break;

      case "enterprise":
        user.subscription = "Enterprise";
        user.credits += 5000;
        break;

      default:
        return res.status(400).json({
          success: false,
          message: "Invalid subscription plan.",
        });
    }

    await user.save();

    return res.status(200).json({
      success: true,
      message: `${user.subscription} plan activated successfully.`,
      user,
    });

  } catch (error) {

    console.error("Upgrade Plan Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};