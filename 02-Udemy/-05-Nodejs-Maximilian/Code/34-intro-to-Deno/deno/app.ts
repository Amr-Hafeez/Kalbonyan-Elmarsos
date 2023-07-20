// import { serve } from "https://deno.land/std/http/server.ts";
//
// const server = serve({port: 3000});
//
// for await (const req of server) {
//     req.respond({body: "Hello World\n"});
// }




import { Application } from "https://deno.land/x/oak/mod.ts";

import todosRoutes from './routes/todos.ts';

const app = new Application();

app.use(async (ctx, next) => {
  console.log('Middleware!');
  await next();
});

app.use(todosRoutes.routes());
app.use(todosRoutes.allowedMethods());

await app.listen({ port: 3000 });