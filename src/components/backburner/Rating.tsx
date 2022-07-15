import React from "react";
interface props {
  upVotes: number;
  downVotes: number;
}
export const Rating: React.FC<props> = ({ upVotes, downVotes }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="material-symbols-outlined text-2xl cursor-pointer">
        expand_less
      </span>
      <p className="text-lg font-semibold">{upVotes - downVotes}</p>
      <span className="material-symbols-outlined text-2xl rotate-180 cursor-pointer">
        expand_less
      </span>
    </div>
  );
};
export default Rating;
