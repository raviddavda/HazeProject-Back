import { Logger } from "../logs/logger";
import { Game } from "./model/games";
import { User } from "./model/user";
import { initUsers } from "./initial-users";
import { initGames } from "./initial-games";

const initDB = async () => {
  const usersCount = await User.countDocuments();
  if (usersCount != 0) return;

  for (let user of initUsers) {
    const saved = await new User(user).save();
    Logger.log("Database empty, Automatically added:", saved);
  }

  // const gamesCount = await Game.countDocuments();
  // if (gamesCount != 0) return;

  // for (let fM of initGames) {
  //   const saved = await new Game(game).save();
  //   Logger.log("Database empty, Automatically added:", saved);
  // }
};

export { initDB };
