export const register = (req, res, next) => {
    // validate user input
    // write todo to database
    // respond to request
  res.json("user registered");
}

export const logIn = (req, res, next) => {
  res.json("user login");
}

export const logOut = (req, res, next) => {
  res.json("user logged out");
}
