export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Long: any;
  Time: any;
};








export type Favourite = {
  __typename?: 'Favourite';
  name: Scalars['String'];
  priority?: Maybe<Scalars['Boolean']>;
  _id: Scalars['ID'];
  profile?: Maybe<Scalars['String']>;
  kind: Kind;
  user: User;
  _ts: Scalars['Long'];
};

export type FavouriteInput = {
  kind: Kind;
  name: Scalars['String'];
  user?: Maybe<FavouriteUserRelation>;
  profile?: Maybe<Scalars['String']>;
  priority?: Maybe<Scalars['Boolean']>;
};

export type FavouritePage = {
  __typename?: 'FavouritePage';
  data: Array<Maybe<Favourite>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};

export type FavouriteUserRelation = {
  create?: Maybe<UserInput>;
  connect?: Maybe<Scalars['ID']>;
};

export enum Kind {
  Artist = 'ARTIST',
  Label = 'LABEL'
}


export type Mutation = {
  __typename?: 'Mutation';
  updateUser?: Maybe<User>;
  deleteFavourite?: Maybe<Favourite>;
  createUser: User;
  createFavourite: Favourite;
  deleteUser?: Maybe<User>;
  updateFavourite?: Maybe<Favourite>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data: UserInput;
};


export type MutationDeleteFavouriteArgs = {
  id: Scalars['ID'];
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationCreateFavouriteArgs = {
  data: FavouriteInput;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateFavouriteArgs = {
  id: Scalars['ID'];
  data: FavouriteInput;
};

export type Query = {
  __typename?: 'Query';
  allUsers: UserPage;
  getUserByStripeID: User;
  findFavouriteByID?: Maybe<Favourite>;
  findUserByID?: Maybe<User>;
  allFavourites: FavouritePage;
  getUserByNetlifyID: User;
  favouritesByKind: FavouritePage;
};


export type QueryAllUsersArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetUserByStripeIdArgs = {
  stripeID: Scalars['ID'];
};


export type QueryFindFavouriteByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryAllFavouritesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryGetUserByNetlifyIdArgs = {
  netlifyID: Scalars['ID'];
};


export type QueryFavouritesByKindArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  kind?: Maybe<Kind>;
};


export type User = {
  __typename?: 'User';
  stripeID: Scalars['ID'];
  _id: Scalars['ID'];
  netlifyID: Scalars['ID'];
  favourites: FavouritePage;
  _ts: Scalars['Long'];
};


export type UserFavouritesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

export type UserFavouritesRelation = {
  create?: Maybe<Array<Maybe<FavouriteInput>>>;
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type UserInput = {
  netlifyID: Scalars['ID'];
  stripeID: Scalars['ID'];
  favourites?: Maybe<UserFavouritesRelation>;
};

export type UserPage = {
  __typename?: 'UserPage';
  data: Array<Maybe<User>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};
