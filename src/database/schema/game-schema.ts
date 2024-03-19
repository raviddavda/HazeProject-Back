import { Schema } from "mongoose";
import { IGame } from "../../@types/games";
import { imageSchema } from "./image-schema";

const gameSchema = new Schema<IGame>({
  image: {
    type: imageSchema,
    required: true,
  },
  userId: {
    type: String,
    required: false,
  },
  likes: [{ type: String }],
  category: { type: String, required: true },
  title: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 256,
  },
  description: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 4096,
  },
  email: {
    required: false,
    type: String,
    // minlength: 5,
    maxlength: 256,
  },
  createdAt: {
    type: Date,
    required: false,
    default: new Date(),
  },
});

export { gameSchema };
