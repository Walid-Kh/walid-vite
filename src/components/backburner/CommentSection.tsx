import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import { comment } from "../../types/types";
import Comment from "./Comment";
import CommentField from "./CommentField";
interface props {}
const CommentSection: React.FC<props> = ({}) => {
  const CommentSectionRef = useRef<HTMLDivElement>(null);
  const [comments, setComments] = useState<JSX.Element[]>();
  const { id } = useParams();
  const {
    data,
    isLoading,
    err,
  }: {
    data: comment[];
    isLoading: boolean;
    err: string | undefined | null;
  } = useFetch("http://192.168.1.4:8000/comments");

  useEffect(() => {
    if (data)
      setComments(
        data
          .filter((x) => x.projectId === id)
          .map((x) => <Comment comment={x} />)
      );
  }, [data]);

  return (
    <div className="flex flex-col" ref={CommentSectionRef}>
      <CommentField comments={comments} setComments={setComments} />
      {comments}
    </div>
  );
};
export default CommentSection;
