import React, { useId } from "react";
import { info } from "../../types/types";
interface props {
  infos: info[] | undefined;
}

export const Info: React.FC<props> = ({ infos }) => {
  const id = useId(); 
  return (
    <div className="mt-4 flex justify-evenly">
      {infos?.map((info,i) => (
        <a href={info.link} className="flex items-center" rel="noreferrer" target="_blank" key={`${id}-${i}`}>
          {info.icon && <img src={info.icon} className="w-6 h-auto" alt=""  />}
            <p className="text-sm text-slate-100 h-fit font-mono font-semibold ml-2">{info.text}</p>
        </a>
      ))}
    </div>
  );
};

export default Info;
