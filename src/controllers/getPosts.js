import { getAllPosts } from "../models/posts";

export const getPosts = (req, res) => {
  try {
    const data = getAllPosts();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
};
