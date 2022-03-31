import { useEffect, useState } from "react";
import { getGifsPerCategory } from "../helpers/GifsManager";

const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(
    () =>
      getGifsPerCategory(category).then((gifs) => {
        setState({
          data: gifs,
          loading: false,
        });
      }),
    [category]
  );

  return state;
};

export default useFetchGifs;
