export const registerUser = (req, res, next) => {
    // validate user input
    // write todo to database
    // respond to request
  res.json("user registered");
}

export const loginUser = (req, res, next) => {
  res.json("user login");
}

export const logoutUser = (req, res, next) => {
  res.json("user logged out");
}

export const updateProfile = (req, res,next) => {
  res.json('user profile updated');
}
