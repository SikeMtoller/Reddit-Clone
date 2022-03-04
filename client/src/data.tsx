import i_comment from "./interfaces/i_comment";
import { i_post } from "./interfaces/i_post";
import { i_user } from "./interfaces/i_user";
const posts: i_post[] = [
  {
    id: 1,
    community: "meni",
    title: "ela",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero? ",
    user: "menashe",
  },
  {
    id: 3,
    community: "meni",
    title: "ela",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero?",
    user: "menashe",
  },
  {
    id: 3,
    community: "meni",
    title: "ela",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero?",
    user: "menashe",
    comments: [
      {
        id: "asf",
        likes: 4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
        user: "meni",
      },
      {
        id: "asasdf",
        likes: 6,
        text: "Lorem ipsum dolor sitg elit. Ab possimus voluptatem.",
        user: "menashe",
      },
      {
        id: "aasdfsf",
        likes: 12,
        text: "Lorelor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
        user: "shamir",
      },
    ],
  },
];

const users: i_user[] = [
  {
    id: "23",
    nickname: "Shamir",
    fullname: "Shoval Beitza",
    email: "manana@hinkaly.kaza",
    birthday: new Date("march 22, 2005"),
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facilis expedita soluta, error consequuntur veniam architecto sint sit tempore officia aperiam rerum tempora culpa perferendis impedit ratione animi asperiores mollitia!",
    image:
      "https://as2.ftcdn.net/v2/jpg/02/70/26/35/1000_F_270263563_i1kpFhV3Ku6DR5rGjSsexzcwD6LgR6yz.jpg",
  },
];

const comments: i_comment[] = [
  {
    id: "asf",
    likes: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
    user: "meni",
  },
  {
    id: "asasdf",
    likes: 6,
    text: "Lorem ipsum dolor sitg elit. Ab possimus voluptatem.",
    user: "menashe",
  },
  {
    id: "aasdfsf",
    likes: 12,
    text: "Lorelor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
    user: "shamir",
  },
];

export const getPosts = () => {
  return posts;
};
export const getUsers = () => {
  return users;
};
export const getComments = () => {
  return comments;
};
//https://www.gevim.co.il/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png
