import dayjs from "dayjs";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { card } from "../../types/types";

import Authors from "../shared/Authors";
import Info from "../shared/Info";
import Loading from "../shared/Loading";
import LoadingError from "../shared/LoadingError";
import Article from "./Article";
/* import CommentSection from "./CommentSection"; */
interface props {}
export const Project: React.FC<props> = () => {
  const { id } = useParams();
  const {
    data,
    isLoading,
    err,
  }: {
    data: card;
    isLoading: boolean;
    err: string | null;
  } = useFetch(`http://192.168.1.9:8000/projects/${id}`);
  return (
    <div className="flex flex-col items-center justify-center my-auto text-slate-100">
      {isLoading && <Loading />}
      {err && <LoadingError errMsg={err} />}
      {data && (
        <article className="flex flex-col my-12 items-center">
          <img
            src={data.title.picture}
            alt={data.title.name}
            className="lg:w-[80%] w-screen"
          />
          <div className="flex flex-col w-[90%] lg:w-[80%] mt-8">
            <div className="flex flex-col mb-4">
              <h1 className="text-2xl font-bold">{data.title.name}</h1>
              <Authors authors={data.authors} />
              <p className="text-slate-300 opacity-60">
                {dayjs(data.createdAt).format("MMM DD, YYYY")}
              </p>
            </div>
            <Article />
            {/* <p className="text-lg font-medium">{data.body}</p> */}
            <Info infos={data.infos} />
          </div>
          {/* <div className="rounded-md overflow-hidden mt-8 lg:w-[80%] w-[90%]">
            <CommentSection />
          </div> */}
        </article>
      )}
    </div>
  );
};

export default Project;
