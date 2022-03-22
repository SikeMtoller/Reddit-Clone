import i_community from "./i_community";
import { i_post } from "./i_post";

export interface i_user {
  id: string;
  fullname: string;
  email: string;
  birthday: Date;
  username: string;
  about?: string;
  posts?: i_post[];
  communites?: i_community[];
}
