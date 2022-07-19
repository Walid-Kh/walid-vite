import React from "react";
import { card } from "../../types/types";
import Blogs from "./Blogs";
import Loading from "../shared/Loading";
import LoadingError from "../shared/LoadingError";
import useFetch from "../../Hooks/useFetch";
import data from "../../data/db"
interface props {
  category: string;
}

export const Home: React.FC<props> = ({ category }) => {
  /* const {
    data,
    isLoading,
    err,
  }: {
    data: card[] | undefined;
    isLoading: boolean;
    err: string | undefined | null;
  } = useFetch("http://192.168.1.9:8000/projects"); */

  return (
    <div
      className="flex justify-center mx-auto my-auto lg:w-[80%] w-[90%] text-slate-100"
    >
      {data && <Blogs blogs={data} category={category} />}
    </div>
  );
};

export default Home;
