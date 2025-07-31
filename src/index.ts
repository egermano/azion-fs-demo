import { Hono } from "hono";
import fs from "node:fs";

const app = new Hono();

app.get("/", async (c) => {
  fs.writeFile("./hello1.txt", "Hello, Azion!", (err) => {
    if (err) {
      console.error(err);
    }
  });

  // (Async) in Azion's file system
  const data = await fs.promises.readFile("./hello1.txt");
  console.log("Read File", data.toString());

  await fs.promises.writeFile("./hello2.txt", "Hello, Azion again!");

  return c.text("Hello Hono Azion!");
});

app.fire();
