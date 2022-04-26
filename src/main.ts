// @ts-ignore
import { Application, HandlerFunc } from "https://deno.land/x/abc@v1.3.3/mod.ts";
// @ts-ignore
import { logger } from "https://deno.land/x/abc@v1.3.3/middleware/logger.ts";
// @ts-ignore
import { data, User } from './data.ts';

const app = new Application();
app.use(logger());

const getAllUsers: HandlerFunc = () => data;
const getUser: HandlerFunc = ({ params }) => {
const { id } = params as { id: string };
return data.find((user: User) => user.id === id);
};

app
  .get("/users", getAllUsers)
  .get("/users/:id", getUser)
  .start({ port: 3000 });


console.log(`server listening on http://localhost:3000`);

