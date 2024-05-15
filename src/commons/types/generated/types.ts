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
};

export type IActor = {
  __typename?: 'Actor';
  id: Scalars['Int']['output'];
  movies: Array<IMovie>;
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
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

export type IMovie = {
  __typename?: 'Movie';
  actors: Array<IActor>;
  audi_acc: Scalars['Int']['output'];
  avg_star: Scalars['Float']['output'];
  boxOfficeToMovies: Array<IBoxOfficeToMovie>;
  cnt_star: Scalars['Int']['output'];
  directors: Array<IDirector>;
  genres: Array<IGenre>;
  id: Scalars['String']['output'];
  open_dt: Scalars['DateTime']['output'];
  plot: Scalars['String']['output'];
  posters: Array<IPoster>;
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  vods: Array<IVod>;
};

export type IMutation = {
  __typename?: 'Mutation';
  initializeTable: Scalars['String']['output'];
  updateActorImage: IActor;
};


export type IMutationUpdateActorImageArgs = {
  id: Scalars['Float']['input'];
  url: Scalars['String']['input'];
};

export type IPoster = {
  __typename?: 'Poster';
  id: Scalars['Int']['output'];
  isRep: Scalars['Boolean']['output'];
  movie: IMovie;
  url: Scalars['String']['output'];
};

export type IQuery = {
  __typename?: 'Query';
  fetchActor: Scalars['String']['output'];
  fetchActorImage: Scalars['String']['output'];
  fetchBoxOffice: Array<IMovie>;
  fetchBoxOfficeToMovie: Scalars['String']['output'];
  fetchPoster: Scalars['String']['output'];
  fetchTemp: Scalars['String']['output'];
  fetchVod: Scalars['String']['output'];
};


export type IQueryFetchActorImageArgs = {
  name: Scalars['String']['input'];
};


export type IQueryFetchBoxOfficeArgs = {
  date: Scalars['String']['input'];
};

export type IVod = {
  __typename?: 'Vod';
  id: Scalars['Int']['output'];
  isRep: Scalars['Boolean']['output'];
  movie: IMovie;
  url: Scalars['String']['output'];
};
