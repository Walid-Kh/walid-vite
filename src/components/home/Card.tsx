import { card } from "../../types/types";
import Info from "../shared/Info";
import Authors from "../shared/Authors";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
interface props {
  card: card;
}
const Card: React.FC<props> = ({ card }) => {
  const { id, title, authors, summary, createdAt, infos } = card;
  const { name, picture } = title;

  let header: JSX.Element = (
    <Link className="text-xl font-bold flex group" to={`/projects/${id}`}>
      <h2>{name}</h2>
      {name && (
        <span
          className="material-symbols-outlined hidden lg:inline
          text-2xl group-hover:ml-2
          transition-all  duration-100
          ease-linear"
        >
          chevron_right
        </span>
      )}
    </Link>
  );
  let metadata: JSX.Element = (
    <div className="flex flex-col">
      <Authors authors={authors} />
      <p className="text-slate-300 opacity-60">
        {dayjs(createdAt, "DD MM YYYY").format(`MMM DD, YYYY`)}
      </p>
    </div>
  );
  return (
    <div
      className="inline-flex mt-4 flex-col bg-slate-100 bg-opacity-5 
      rounded-2xl overflow-hidden border-2 border-slate-100 border-opacity-10"
    >
      <img src={picture} alt="" />
      <section className="text p-4 ">
        {header}
        {metadata}
        <p className="mt-2">{summary}</p>
        <Info infos={infos} />
      </section>
    </div>
  );
};

export default Card;
