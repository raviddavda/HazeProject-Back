import mongoose from "mongoose";
import { gameSchema } from "../schema/game-schema";

const Game = mongoose.model("game", gameSchema);

export { Game };
