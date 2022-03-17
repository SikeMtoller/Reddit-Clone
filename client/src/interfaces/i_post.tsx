import i_comments from "./i_comment";
export interface i_post {
  _id: number;
  community: string;
  title: string;
  body: string;
  author: string;
  comments?: i_comments[];
  image?: string;
}
