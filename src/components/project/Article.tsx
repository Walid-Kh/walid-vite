import React from "react";
import {marked} from "marked"; 
interface props {
    markdown : string, 
}
export const Article: React.FC<props> = ({markdown}) => {
markdown = markdown.substring(markdown.indexOf("\n")+1,markdown.length);
console.log(markdown);
return (
<div dangerouslySetInnerHTML={{__html: marked(markdown)}}
    className="markdown">
</div>
);
};
export default Article;