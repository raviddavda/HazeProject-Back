import { Schema } from "mongoose";
import { IImage } from "../../@types/user";

const imageSchema = new Schema<IImage>({
  url: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 2000,
  },
  alt: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 2000,
  },
});

export { imageSchema };
