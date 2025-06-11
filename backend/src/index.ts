import { Hono } from "hono";
import { PrismaClient } from "../app/generated/prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { userRouter } from "./router/user";
import { blogRouter } from "./router/blog";
const prisma = new PrismaClient();
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SCERET: string;
  };
}>();

app.route("/api/v1/user",userRouter);
app.route("/api/v1/blog",blogRouter)


export default app;
