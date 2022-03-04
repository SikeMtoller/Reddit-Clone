import i_comments from "./i_comment";
export interface i_post {
  id: number;
  community: string;
  title: string;
  text: string;
  user: string;
  comments?: i_comments[];
  image?: string;
}
