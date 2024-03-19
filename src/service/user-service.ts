import { IUser } from "../@types/user";
import { User } from "../database/model/user";
import { HazeError } from "../error/haze-error";
import { auth } from "./auth-service";

const createUser = async (userData: IUser) => {
  const user = new User(userData);

  user.password = await auth.hashPassword(user.password);

  return user.save();
};

const validateUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });

  console.log(user.id);

  if (!user) throw new HazeError("Bad credentials", 401);

  const isPasswordValid = auth.validatePassword(password, user.password);

  if (!isPasswordValid) throw new HazeError("Bad credentials", 401);

  const jwt = auth.generateJWT({
    email,
    _id: user.id,
    isAdmin: user.isAdmin,
    isBusiness: user.isBusiness,
  });

  return { jwt };
};

export { createUser, validateUser };
