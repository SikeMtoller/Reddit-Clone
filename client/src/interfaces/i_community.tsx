import { i_post } from "./i_post";

export default interface i_community {
  id: string;
  name: string;
  title: string;
  posts: i_post[];
  about: string;
  numberOfMembers: number;
}
