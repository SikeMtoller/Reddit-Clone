import i_comments from "./i_comment";
export interface i_post {
  _id: number;
  title: string;
  body: string;
  community: string;
  author: string;
  comments?: i_comments[];
  image?: string;
}
