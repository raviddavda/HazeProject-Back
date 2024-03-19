import { Router } from "express";
import { addGame } from "../service/games-service";
import { IGameInput } from "../@types/games";
import { Game } from "../database/model/games";
import { validateGame } from "../middleware/validation";
import { isBusiness } from "../middleware/authentication/is-business";
import { HazeError } from "../error/haze-error";
import { validateToken } from "../middleware/authentication/validate-token";
import { isCreatorOrAdmin } from "../middleware/authentication/is-creator-or-admin";

const router = Router();

//get all games
router.get("/", async (req, res, next) => {
  try {
    const allGames = await Game.find();

    res.json({ allGames });
  } catch (error) {
    next(error);
  }
});

//create a new game
router.post("/", isBusiness, async (req, res, next) => {
  try {
    const userId = req.user?._id;
    if (!userId) throw new HazeError("User must have an ID!", 500);

    const saved = await addGame(req.body as IGameInput, userId);

    res.status(201).json({ message: "Game Added!", game: saved });
  } catch (error) {
    next(error);
  }
});

//get user created games
router.get("/my-games", validateToken, async (req, res, next) => {
  try {
    const userId = req.user?._id;

    const games = await Game.find({ userId });

    return res.json(games);
  } catch (error) {
    next(error);
  }
});

//get game by ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const game = await Game.findById(id);

    return res.json(game);
  } catch (error) {
    next(error);
  }
});

//edit game
router.put("/:id", validateToken, validateGame, async (req, res, next) => {
  try {
    const userId = req.user?._id;

    const game = await Game.findById(req.params.id);

    if (userId != game.userId)
      throw new HazeError("You are not the owner of this game!", 401);

    const updatedGame = await Game.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    res.json(updatedGame);
  } catch (error) {
    next(error);
  }
});

//like a game
router.patch("/:id", validateToken, async (req, res, next) => {
  try {
    const userId = req.user?._id;

    const game = await Game.findById(req.params.id);

    if (!game.likes.includes(userId)) {
      const likedGame = await Game.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { likes: userId } },
        { new: true }
      );
      res.json(likedGame);
    } else {
      const likedGame = await Game.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { likes: userId } },
        { new: true }
      );
      res.json(likedGame);
    }
  } catch (error) {
    next(error);
  }
});

//delete game
router.delete("/:id", isCreatorOrAdmin, async (req, res, next) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);

    res.json({ message: "Game Removed!" });
  } catch (error) {
    next(error);
  }
});

export { router as gamesRouter };
