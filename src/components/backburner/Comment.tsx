import dayjs from "dayjs";
import React from "react";
import { comment } from "../../types/types";
interface props {
  comment: comment;
}
export const Comment: React.FC<props> = ({ comment }) => {
  const { author, body, date } = comment;
  return (
    <div
      className="flex flex-col p-3 bg-slate-100 text-slate-100
            border-2 border-slate-100 border-opacity-10 bg-opacity-5 border-t-0"
    >
      <div className="flex justify-between">
        <p className="text-slate-300 text-opacity-60">{author} says</p>
        <p className="text-slate-300 text-opacity-60">{dayjs(date).format("MMM DD, YYYY")}</p>
      </div>
      <p>{body}</p>
    </div>
  );
};
export default Comment;
