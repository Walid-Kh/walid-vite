import Card from "./Card";
import { card } from "../../types/types";

interface props {
  blogs: card[] | undefined;
  category: string;
}
const Blogs: React.FC<props> = ({ blogs, category }) => {
  const content = blogs
    ? blogs.map((blog) => <Card card={blog} key={blog.id} />)
    : "";
  return (
    <div className="my-12">
      <h2 className="text-2xl mb-4 font-bold">{category}</h2>
      <div className="columns-1 2xl:columns-3 xl:columns-2">{content}</div>
    </div>
  );
};
export default Blogs;
