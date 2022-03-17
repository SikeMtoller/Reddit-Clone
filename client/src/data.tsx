import i_comment from "./interfaces/i_comment";
import i_community from "./interfaces/i_community";
import { i_post } from "./interfaces/i_post";
import { i_user } from "./interfaces/i_user";
const posts: i_post[] = [
  {
    _id: 1,
    community: "meni",
    title: "Janana",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero? ",
    author: "menashe",
  },
  {
    _id: 3,
    community: "meni",
    title: "Janana",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero?",
    author: "menashe",
  },
  {
    _id: 3,
    community: "meni",
    title: "Janana",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero?",
    author: "menashe",
    comments: [
      {
        id: "asf",
        likes: 4,
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
        author: "meni",
      },
      {
        id: "asasdf",
        likes: 6,
        body: "Lorem ipsum dolor sitg elit. Ab possimus voluptatem.",
        author: "menashe",
      },
      {
        id: "aasdfsf",
        likes: 12,
        body: "Lorelor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
        author: "shamir",
      },
    ],
  },
];

const communities: i_community[] = [
  {
    id: "35",
    name: "javascript",
    title:
      "javascript - the communities for menashes like Hajaj who cant program",
    about: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem soluta saepe sapiente voluptatibus adipisci molestias neque velit maiores obcaecati consequatur veritatis, laboriosam ipsum, consequuntur error explicabo iste sunt voluptatem veniam.`,
    numberOfMembers: 1000,
    posts: [
      {
        _id: 1,
        community: "meni",
        title: "ela",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero? ",
        author: "menashe",
      },
      {
        _id: 3,
        community: "meni",
        title: "ela",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero?",
        author: "menashe",
      },
      {
        _id: 3,
        community: "meni",
        title: "ela",
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae iusto quo quasi quidem, saepe nobis aperiam repellendus doloremque minus possimus illum, quas, cumque voluptas eveniet modi mollitia necessitatibus voluptate libero?",
        author: "menashe",
        comments: [
          {
            id: "asf",
            likes: 4,
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
            author: "meni",
          },
          {
            id: "asasdf",
            likes: 6,
            body: "Lorem ipsum dolor sitg elit. Ab possimus voluptatem.",
            author: "menashe",
          },
          {
            id: "aasdfsf",
            likes: 12,
            body: "Lorelor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
            author: "shamir",
          },
        ],
      },
    ],
  },
];

const users: i_user[] = [
  {
    id: "23",
    username: "Shamir",
    fullname: "Shoval Beitza",
    email: "manana@hinkaly.kaza",
    birthday: new Date("march 22, 2005"),
    about:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates facilis expedita soluta, error consequuntur veniam architecto sint sit tempore officia aperiam rerum tempora culpa perferendis impedit ratione animi asperiores mollitia!",
  },
];

const comments: i_comment[] = [
  {
    id: "asf",
    likes: 4,
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
    author: "meni",
  },
  {
    id: "asasdf",
    likes: 6,
    body: "Lorem ipsum dolor sitg elit. Ab possimus voluptatem.",
    author: "menashe",
  },
  {
    id: "aasdfsf",
    likes: 12,
    body: "Lorelor sit amet consectetur adipisicing elit. Ab possimus voluptatem.",
    author: "shamir",
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
export const getCommunities = () => {
  return communities;
};
//https://www.gevim.co.il/wp-content/uploads/2013/12/default-placeholder-1024x1024-570x321.png
