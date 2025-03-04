const { BadRequest, NotFound } = require("../libs/error");

 
 
 
 
 exports.updateUser = async (payload) => {
    const { body, params } = payload;
    const id = params.id;
    if (!id) {
      throw new BadRequest("Data not given");
    }
    const updatedUser = await Users.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
  
    if (!updatedUser) {
      throw new NotFound("User not found to update");
    } else {
      return updatedUser;
    }
  };
  
  exports.deleteUser = async (payload) => {
    const { id } = payload.params;
    if (!id) {
      throw new BadRequest("Data not given");
    }
    const deletedUser = await Users.findOneAndDelete({ _id: id });
  
    if (!deletedUser) {
      throw new NotFound("User not found to delete");
    } else {
      return deletedUser;
    }
  };
  
  exports.createUser = async (payload) => {
  
   
 }