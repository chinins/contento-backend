import express from "express";

import { deletePost, getPosts } from "./controllers";

export const router = express.Router();

router.get("/", getPosts).delete("/posts/:id", deletePost);
