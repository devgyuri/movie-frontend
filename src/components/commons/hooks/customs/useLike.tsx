import { useEffect, useState } from "react";
import { useMutationCreateLike } from "../mutations/useMutationCreateLike";
import { useMutationDeleteLike } from "../mutations/useMutationDeleteteLike";
import { useQueryFetchLike } from "../queries/useQueryFetchLike";
import { useQueryFetchLikeCountByMovie } from "../queries/useQueryFetchLikeCountByMovie";

export interface IUseLike {
  isLike: boolean;
  likeCount: number;
  onClickToggle: () => Promise<void>;
}

export interface IUseLikeArgs {
  movieId: string;
}

export const useLike = (args: IUseLikeArgs): IUseLike => {
  const [isLike, setIsLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const { data } = useQueryFetchLike({
    userId: 1,
    movieId: args.movieId,
  });

  const { data: likeData } = useQueryFetchLikeCountByMovie({
    movieId: args.movieId,
  });

  useEffect(() => {
    setIsLike(data?.fetchLike ?? false);
    setLikeCount(likeData?.fetchLikeCountByMovie ?? 0);
  }, [data, likeData]);

  const [createLike] = useMutationCreateLike();
  const [deleteLike] = useMutationDeleteLike();

  const onClickToggle = async (): Promise<void> => {
    try {
      if (isLike === false) {
        await createLike({
          variables: {
            userId: 1,
            movieId: args.movieId,
          },
        });
        setLikeCount((prev) => prev + 1);
      } else {
        await deleteLike({
          variables: {
            userId: 1,
            movieId: args.movieId,
          },
        });
        setLikeCount((prev) => prev - 1);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }

    setIsLike((prev) => !prev);
    console.log(isLike);
  };

  return {
    isLike,
    likeCount,
    onClickToggle,
  };
};
