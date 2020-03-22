import { db } from "../db";

export const getAllPosts = () => db.posts;

export const deletePost = id => {
  if (db.posts.some(post => post.id === id)) {
    db.posts = db.posts.filter(post => post.id !== id);
  } else {
    throw new Error("Id not found");
  }
};
