import { deletePost as deletePostDB } from "../models/posts";

export const deletePost = (req, res) => {
  console.log("deletePost -> deletePost");
  try {
    deletePostDB(req.params.id);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
};
