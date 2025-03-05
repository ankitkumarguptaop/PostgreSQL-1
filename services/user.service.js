const User = require("../db/models/user");

const { BadRequest, NotFound } = require("../libs/error");

exports.listUser = () => {
  return User.findAll();
};

exports.updateUser = async (payload) => {
  const { body, params } = payload;
  const { updatedName, updatedEmail, updatedPassword } = body;
  const id = params.id;

  if (!id) {
    throw new BadRequest("user id not given");
  }

  const user = User.findByPk(id);
  if (!user) {
    throw new NotFound("User not found to Update");
  }
  user.name = updatedName;
  user.email = updatedEmail;
  user.password = updatedPassword;
  return user.save();
};

exports.deleteUser = async (payload) => {
  const { id } = payload.params;
  if (!id) {
    throw new BadRequest("user id is not given");
  }

  const user = User.findByPk(id);
  if (!user) {
    throw new NotFound("User not found to delete");
  }
  return User.destroy({
    where: {
      id: id,
    },
  });
};

exports.createUser = async (payload) => {
  const { name, email, password } = payload.body;

  if (!name || !email || !password) {
    throw new BadRequest(" data is not given");
  }

  const response = User.create({
    name: name,
    email: email,
    password: password,
  });

  return response;
};
