import { RequestHandler } from "express";
import { auth } from "../../service/auth-service";
import { User } from "../../database/model/user";
import { extractToken } from "./is-admin";
import { HazeError } from "../../error/haze-error";
import { IUser } from "../../@types/user";

const isUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = extractToken(req);
    const { email } = auth.verifyJTW(token);

    const user = (await User.findOne({ email }).lean()) as IUser;
    req.user = user;

    if (!user) throw new HazeError("User does not exist!", 401);

    if (id == user._id.toString()) return next();

    throw new HazeError("Accessible only by the user", 401);
  } catch (error) {
    next(error);
  }
};

export { isUser };
