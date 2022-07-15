import React from "react";
import useFetch from "../../Hooks/useFetch";
import { card } from "../../types/types";
import Info from "../shared/Info";
import Loading from "../shared/Loading";
import LoadingError from "../shared/LoadingError";


interface props {}
export const About: React.FC<props> = () => {
  const {
    data,
    isLoading,
    err,
  }: {
    data: card | undefined;
    isLoading: boolean;
    err: string | null | undefined;
  } = useFetch("http://localhost:8000/About");
  return (
    <div className="About-container">
      {isLoading && <Loading />}
      {err && <LoadingError errMsg={err} />}
      {data && <div className="Card About">
        <img src={data?.title.picture} className="profile" alt=""/>
        <section>
          <h1 className="About-heading">{data?.title.name}</h1>
          <p>{data?.body}</p>
          <Info infos={data?.infos} />
        </section>
      </div>}
    </div>
  );
};

export default About;
