import Joi from "joi";
import { IGame } from "../@types/games";
import { IImage } from "../@types/user";

const gameSchema = Joi.object<IGame>({
  title: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(4096).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .min(5)
    .max(256)
    .allow(""),
  image: Joi.object<IImage>({
    url: Joi.string().min(12).max(2000).required(),
    alt: Joi.string().min(2).max(2000).required(),
  }),
  category: Joi.string().min(2).max(256).required(),
});

export { gameSchema };
