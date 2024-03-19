import { businessSchema } from "../../joi/business.joi";
import { gameSchema } from "../../joi/game.joi";
import { loginSchema } from "../../joi/login.joi";
import { registerSchema } from "../../joi/register.joi";
import { validateSchema } from "./validate-schema";

export const validateRegistration = validateSchema(registerSchema);
export const validateLogin = validateSchema(loginSchema);
export const validateBusiness = validateSchema(businessSchema);
export const validateGame = validateSchema(gameSchema);
