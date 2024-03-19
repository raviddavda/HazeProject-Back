type IName = {
  first: string;
  middle: string;
  last: string;
};

type IImage = {
  url: string;
  alt: string;
};

type IAddress = {
  street: string;
  city: string;
  country: string;
  houseNumber: number;
  state: string;
  zip: string;
};

type IUser = {
  name: IName;
  address: IAddress;
  image?: IImage;
  email: string;
  phone: string;
  password: string;
  isBusiness: boolean;
  isAdmin?: boolean;
  createdAt?: Date;
  _id?: string;
};

type ILogin = {
  email: string;
  password: string;
};

type IJWTPayload = {
  email: string;
  _id: string;
  isBusiness: boolean;
  isAdmin: boolean;
};

type IBusiness = {
  isBusiness: boolean;
};

export { IName, IImage, IAddress, IUser, ILogin, IJWTPayload, IBusiness };
