const mongoose = require("mongoose");

import { Schema } from "mongoose";

// Document interface
export interface Blog {
  author: string;
  date: Date;
  title: string;
  image: Buffer;
  body: string;
  likes: number;
  comments: number;
}

// Schema
const blogSchema = new Schema<Blog>({
  author: { type: String, required: true },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  image: { type: Buffer },
  body: { type: String, required: true },
  likes: { type: Number, required: true },
  comments: { type: Number, required: true },
});

// `UserModel` will have `name: string`, etc.
module.exports = mongoose.model("Blog", blogSchema);
