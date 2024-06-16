import { useEffect, useState } from "react";
import { useQueryFetchSeenCountByMovie } from "../queries/useQueryFetchSeenCountByMovie";
import { useMoveToPage } from "./useMoveToPage";
import { useRecoilState } from "recoil";
import { authState } from "../../../../commons/stores";
import { useLazyQueryFetchSeen } from "../queries/useLazyQueryFetchSeen";
import { useMutationCreateSeen } from "../mutations/useMutationCreateSeen";
import { useMutationDeleteSeen } from "../mutations/useMutationDeleteSeen";

export interface IUseSeen {
  isSeen: boolean;
  seenCount: number;
  onClickToggle: () => Promise<void>;
}

export interface IUseSeenArgs {
  movieId: string;
}

export const useSeen = (args: IUseSeenArgs): IUseSeen => {
  const { moveToPage } = useMoveToPage();
  const [isAuth] = useRecoilState(authState);

  const [isSeen, setIsSeen] = useState(false);
  const [seenCount, setSeenCount] = useState(0);

  const [getSeen, { data }] = useLazyQueryFetchSeen({
    movieId: args.movieId,
  });

  const { data: likeData } = useQueryFetchSeenCountByMovie({
    movieId: args.movieId,
  });

  useEffect(() => {
    if (isAuth) {
      getSeen();
    }
  }, [isAuth]);

  useEffect(() => {
    setIsSeen(data?.fetchSeen ?? false);
  }, [data]);

  useEffect(() => {
    setSeenCount(likeData?.fetchSeenCountByMovie ?? 0);
  }, [likeData]);

  const [createSeen] = useMutationCreateSeen();
  const [deleteSeen] = useMutationDeleteSeen();

  const onClickToggle = async (): Promise<void> => {
    if (!isAuth) {
      alert("로그인 후 이용 가능합니다.");
      moveToPage("/login");
      return;
    }

    try {
      if (isSeen === false) {
        await createSeen({
          variables: {
            movieId: args.movieId,
          },
        });
        setSeenCount((prev) => prev + 1);
      } else {
        await deleteSeen({
          variables: {
            movieId: args.movieId,
          },
        });
        setSeenCount((prev) => prev - 1);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }

    setIsSeen((prev) => !prev);
    console.log(isSeen);
  };

  return {
    isSeen,
    seenCount,
    onClickToggle,
  };
};
