import { IGameInput } from "../@types/games";
import { Game } from "../database/model/games";

const addGame = async (data: IGameInput, userId: string) => {
  //bizNumber, userId
  const game = new Game(data);

  game.userId = userId;

  return game.save();
};

export { addGame };
