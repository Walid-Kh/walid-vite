import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Comment from "./Comment";
interface props {
  comments: any;
  setComments: React.Dispatch<any>;
}
export const CommentField: React.FC<props> = ({ setComments, comments }) => {
  const { id } = useParams();
  const [body, setBody] = useState<string>("");
  const CommentFieldRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!body) return;
    const comment = {
      body,
      id: `${Math.floor(Math.random() * 1000)}`,
      projectId: `${id}`,
      date: new Date().getTime(),
      author: `Anon`,
    };
    setBody("");
    fetch("http://192.168.1.4:8000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    setComments([...comments, <Comment comment={comment} />]);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex">
      <input
        className="select-none flex-grow outline-none text-slate-100
         p-3 bg-slate-100 bg-opacity-5 border-2 border-slate-100 border-opacity-10"
        type="text"
        placeholder="Care to comment?"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        ref={CommentFieldRef}
      />
      <input
        type="submit"
        className="p-3 cursor-pointer bg-slate-100 bg-opacity-5 border-2 border-slate-100 border-opacity-10
       border-l-0  "
        value="Comment"
      />
    </form>
  );
};
export default CommentField;
