import React from "react";
import { author } from "../../types/types";
interface props {
  authors: author[];
};
export const Authors: React.FC<props> = ({ authors}) => {
  return (
    <div className="flex">
      {authors.map((author) => (
        <a
          href={author.githubAccount}
          rel="noreferrer"
          target="_blank"
          key={author.id}
          className="first:m-0 ml-2 text-slate-300 opacity-60"
        >
          <p className="underline underline-offset-2">
            @{author.name}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Authors;
