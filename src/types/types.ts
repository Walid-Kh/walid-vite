interface title {
  name: string,
  picture: string,
};
export interface author {
  name: string,
  id: string,
  githubAccount: string,
};
export interface info {
  text: string,
  icon: string,
  link:string,
}; 
export interface comment
{
  body: string, 
  date: number, 
  id: string, 
  projectId: string , 
  author: string,
}
export interface card {
  title: title,
  body: string,
  summary: string, 
  authors: author[],
  id: string,
  createdAt: string,
  infos: info[],
  upVotes: number, 
  downVotes: number, 
};
