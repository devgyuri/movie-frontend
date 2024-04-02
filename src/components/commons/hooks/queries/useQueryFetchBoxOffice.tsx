import { gql, useQuery } from "@apollo/client";

export const FETCH_BOXOFFICE = gql`
  query fetchBoxOffice($date: String!) {
    fetchBoxOffice(date: $date) {
      id
      title
      open_dt
      plot
      actors {
        name
      }
      directors {
        name
      }
      genres {
        name
      }
      posters {
        url
        isRep
      }
      vods {
        url
        isRep
      }
    }
  }
`;

export const useQueryFetchBoxOffice = () => {
  const result = useQuery(FETCH_BOXOFFICE, {
    variables: {
      date: "20240301",
    },
  });
  return result;
};
