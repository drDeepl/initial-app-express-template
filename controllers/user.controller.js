const users = [{ username: "test1" }, { username: "test2" }];

const getUsers = async (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    res.status(200).json(users[id]);
  } catch (error) {
    console.error(error);
  }
};

const createUser = async (req, res) => {
  try {
    users.push(req.body);
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
