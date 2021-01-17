import { __prod__ } from "./constants";
import { Post } from "./entites/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entites/User";
require("dotenv").config();

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: "lireddit",
  password: process.env.DB_PASS,
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0]; // this solves type error on index.ts
