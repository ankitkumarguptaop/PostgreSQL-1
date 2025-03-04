
const {userService}  =require("../services")

exports.listUser = async (req, res) => {
    try {
      const response = await userService.listUser();
      res.status(200).json(response);
    } catch (error) {
      console.log("Failed to list users", error);
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  };
  
  exports.updateUser = async (req, res) => {
    try {
      const response = await userService.updateUser({
        body: req.body,
        params: req.params,
      });
      res.status(200).json({
        message: "successfuly user updated ",
        user: response,
      });
    } catch (error) {
      console.log("Failed to update", error.message);
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    try {
      const response = await userService.deleteUser({
        params: req.params,
      });
      res
        .status(200)
        .json({ message: "successfuly deleted user", user: response });
    } catch (error) {
      console.log("Failed to delete user", error.message);
      res.status(error.statusCode || 500).json({ error: error.message });
    }
  };