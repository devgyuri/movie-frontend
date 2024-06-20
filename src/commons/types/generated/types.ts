export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type IActor = {
  __typename?: 'Actor';
  id: Scalars['Int']['output'];
  movies: Array<IMovie>;
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type IAuthInfo = {
  __typename?: 'AuthInfo';
  accessToken: Scalars['String']['output'];
  profile: IProfile;
};

export type IBoxOffice = {
  __typename?: 'BoxOffice';
  boxOfficeToMovies: Array<IBoxOfficeToMovie>;
  date: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
};

export type IBoxOfficeToMovie = {
  __typename?: 'BoxOfficeToMovie';
  boxOffice: IBoxOffice;
  id: Scalars['Int']['output'];
  movie: IMovie;
  rank: Scalars['Int']['output'];
};

export type IComment = {
  __typename?: 'Comment';
  contents: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  movie: IMovie;
  star: Scalars['Float']['output'];
  user: IUser;
};

export type ICreateCommentInput = {
  contents: Scalars['String']['input'];
  created_at: Scalars['DateTime']['input'];
  movieId: Scalars['String']['input'];
  star: Scalars['Float']['input'];
};

export type ICreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type IDirector = {
  __typename?: 'Director';
  id: Scalars['Int']['output'];
  movies: Array<IMovie>;
  name: Scalars['String']['output'];
};

export type IGenre = {
  __typename?: 'Genre';
  id: Scalars['Int']['output'];
  movies: Array<IMovie>;
  name: Scalars['String']['output'];
};

export type IId = {
  __typename?: 'Id';
  id: Scalars['Int']['output'];
};

export type ILike = {
  __typename?: 'Like';
  id: Scalars['Int']['output'];
  movie: IMovie;
  user: IUser;
};

export type IMovie = {
  __typename?: 'Movie';
  actors: Array<IActor>;
  audi_acc: Scalars['Int']['output'];
  avg_star: Scalars['Float']['output'];
  boxOfficeToMovies: Array<IBoxOfficeToMovie>;
  cnt_star: Scalars['Int']['output'];
  comments: Array<IComment>;
  directors: Array<IDirector>;
  genres: Array<IGenre>;
  id: Scalars['String']['output'];
  likes: Array<ILike>;
  open_dt: Scalars['DateTime']['output'];
  plot: Scalars['String']['output'];
  posters: Array<IPoster>;
  rating: Scalars['Int']['output'];
  runtime: Scalars['Int']['output'];
  seen: Array<ISeen>;
  stills: Array<IStill>;
  title: Scalars['String']['output'];
  vods: Array<IVod>;
};

export type IMutation = {
  __typename?: 'Mutation';
  createComment: IComment;
  createLike: Scalars['Boolean']['output'];
  createSeen: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deleteComment: IId;
  deleteLike: Scalars['Boolean']['output'];
  deleteSeen: Scalars['Boolean']['output'];
  initializeTable: Scalars['String']['output'];
  loginUser: IAuthInfo;
  logoutUser: Scalars['String']['output'];
  restoreAccessToken: IToken;
  updateActorImage: IActor;
  updateComment: IComment;
  updateUser: IProfile;
  uploadPicture: IUrl;
};


export type IMutationCreateCommentArgs = {
  createCommentInput: ICreateCommentInput;
};


export type IMutationCreateLikeArgs = {
  movieId: Scalars['String']['input'];
};


export type IMutationCreateSeenArgs = {
  movieId: Scalars['String']['input'];
};


export type IMutationCreateUserArgs = {
  createUserInput: ICreateUserInput;
};


export type IMutationDeleteCommentArgs = {
  commentId: Scalars['Int']['input'];
};


export type IMutationDeleteLikeArgs = {
  movieId: Scalars['String']['input'];
};


export type IMutationDeleteSeenArgs = {
  movieId: Scalars['String']['input'];
};


export type IMutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type IMutationUpdateActorImageArgs = {
  id: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};


export type IMutationUpdateCommentArgs = {
  updateCommentInput: IUpdateCommentInput;
};


export type IMutationUpdateUserArgs = {
  updateUserInput: IUpdateUserInput;
};


export type IMutationUploadPictureArgs = {
  picture: Scalars['Upload']['input'];
};

export type IPoster = {
  __typename?: 'Poster';
  id: Scalars['Int']['output'];
  isRep: Scalars['Boolean']['output'];
  movie: IMovie;
  url: Scalars['String']['output'];
};

export type IProfile = {
  __typename?: 'Profile';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  picture: Scalars['String']['output'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchActor: Scalars['String']['output'];
  fetchActorImage: Scalars['String']['output'];
  fetchBoxOffice: Array<IMovie>;
  fetchBoxOfficeToMovie: Scalars['String']['output'];
  fetchComment: Scalars['String']['output'];
  fetchComments: Array<IComment>;
  fetchLike: Scalars['Boolean']['output'];
  fetchLikeCountByMovie: Scalars['Int']['output'];
  fetchMovie: IMovie;
  fetchMovies: Array<IMovie>;
  fetchPoster: Scalars['String']['output'];
  fetchSeen: Scalars['Boolean']['output'];
  fetchSeenCountByMovie: Scalars['Int']['output'];
  fetchStill: Scalars['String']['output'];
  fetchUser: IProfile;
  fetchVod: Scalars['String']['output'];
  nameDuplicationCheck: Scalars['Boolean']['output'];
};


export type IQueryFetchActorImageArgs = {
  name: Scalars['String']['input'];
};


export type IQueryFetchBoxOfficeArgs = {
  date: Scalars['String']['input'];
};


export type IQueryFetchCommentsArgs = {
  movieId: Scalars['String']['input'];
};


export type IQueryFetchLikeArgs = {
  movieId: Scalars['String']['input'];
};


export type IQueryFetchLikeCountByMovieArgs = {
  movieId: Scalars['String']['input'];
};


export type IQueryFetchMovieArgs = {
  id: Scalars['String']['input'];
};


export type IQueryFetchMoviesArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type IQueryFetchSeenArgs = {
  movieId: Scalars['String']['input'];
};


export type IQueryFetchSeenCountByMovieArgs = {
  movieId: Scalars['String']['input'];
};


export type IQueryNameDuplicationCheckArgs = {
  name: Scalars['String']['input'];
};

export type ISeen = {
  __typename?: 'Seen';
  id: Scalars['Int']['output'];
  movie: IMovie;
  user: IUser;
};

export type IStill = {
  __typename?: 'Still';
  id: Scalars['Int']['output'];
  isRep: Scalars['Boolean']['output'];
  movie: IMovie;
  url: Scalars['String']['output'];
};

export type IToken = {
  __typename?: 'Token';
  accessToken: Scalars['String']['output'];
};

export type IUpdateCommentInput = {
  contents?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  star?: InputMaybe<Scalars['Float']['input']>;
};

export type IUpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type IUrl = {
  __typename?: 'Url';
  url: Scalars['String']['output'];
};

export type IUser = {
  __typename?: 'User';
  comments: Array<IComment>;
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  likes: Array<ILike>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  picture: Scalars['String']['output'];
};

export type IVod = {
  __typename?: 'Vod';
  id: Scalars['Int']['output'];
  isRep: Scalars['Boolean']['output'];
  movie: IMovie;
  url: Scalars['String']['output'];
};
