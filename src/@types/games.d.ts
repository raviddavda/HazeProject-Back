export type IGameInput = {
  title: string;
  description: string;
  email: string;
  image: Image;
};

export type IGame = IGameInput & {
  bizNumber?: number;
  userId?: string;
  _id?: string;
  likes: string[];
  createdAt: Date;
  category: string;
};

export type IGameInputLike = {
  tags: string[];
};
