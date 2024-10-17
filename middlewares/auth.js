// middlewares that deal with authentication
// import jwt from "jsonwebtoken";
import { expressjwt } from "express-jwt";

export const isAuthenticated = expressjwt({
  secret: process.env.JWT_PRIVATE_KEY,
  algorithms: ["HS256"],
});

// were goin to exprot const, function...

// export const isAuthenticated = (req, res, next) => {
//   try {
//     // get authorization from header(in postman?)
//     const authorization = req.headers.authorization;

//     // extract token from the authorization header
//     const token = authorization.split(" ")[1];
//     // verify & decode the token, to get the user
//     const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
//     // console.log(decoded);
//     // attach user to request
//     req.user = {id:decoded.id}
//     // hand over request to the next middleware/controller
//     next();
//   } catch (error) {
//     next(error);
//   }
// };
