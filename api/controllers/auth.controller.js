import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

const authController = {}

authController.signup = async (request, response, next) => {
   const {username, email, password} = request.body;

   const hashedPassword = await bcrypt.hash(password, 10)

   try {
      const newUser = new User({username, email, password: hashedPassword})
      await newUser.save();

      response.status(200).json(newUser);

   } catch (error) {
      next(error);
   }
};

authController.signin = async (request, response, next) => {
   const { email, password } = request.body;
   try {
      const validUser = await User.findOne({ email});
      if(!validUser) return next(errorHandler(404, "User not found"));

      const validPassword = await bcrypt.compare(password, validUser.password);  
      if (!validPassword) return next(errorHandler(401, "Invalid credentials"));

      const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
      const {password: pass, ...rest} = validUser._doc // * not show password when returning user object

      response.cookie("access_token", token, {httpOnly: true}).status(200).json(rest);
   } catch (error) {
      next(error);
   }
}

export default authController