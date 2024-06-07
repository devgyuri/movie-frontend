import { useEffect, useState } from "react";
import { useMutationCreateLike } from "../mutations/useMutationCreateLike";
import { useMutationDeleteLike } from "../mutations/useMutationDeleteLike";
import { useQueryFetchLike } from "../queries/useQueryFetchLike";
import { useQueryFetchLikeCountByMovie } from "../queries/useQueryFetchLikeCountByMovie";
import { useMoveToPage } from "./useMoveToPage";
import { useRecoilState } from "recoil";
import { authState } from "../../../../commons/stores";

export interface IUseLike {
  isLike: boolean;
  likeCount: number;
  onClickToggle: () => Promise<void>;
}

export interface IUseLikeArgs {
  movieId: string;
}

export const useLike = (args: IUseLikeArgs): IUseLike => {
  const { moveToPage } = useMoveToPage();
  const [isAuth] = useRecoilState(authState);

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
    console.log("useEffect by like");
  }, [data, likeData]);

  const [createLike] = useMutationCreateLike();
  const [deleteLike] = useMutationDeleteLike();

  const onClickToggle = async (): Promise<void> => {
    if (!isAuth) {
      alert("로그인 후 이용 가능합니다.");
      moveToPage("/login");
      return;
    }

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
