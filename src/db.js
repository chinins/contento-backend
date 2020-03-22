import fs from "fs";

const dataFilePath = __dirname + "/data.json";

export const db = { posts: [] };

fs.readFile(dataFilePath, "utf8", (err, data) => {
  try {
    const result = JSON.parse(data);
    if (result && result.posts) {
      db.posts = result.posts;
    }
  } catch (err) {
    throw new Error(err);
  }
});
