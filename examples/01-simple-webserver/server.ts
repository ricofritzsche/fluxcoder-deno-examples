import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((ctx) => {
    ctx.response.body = "Welcome to FluxCoder!";
});

const port = 3000;

app.addEventListener("listen", () => {
    console.log(`Server listening on port ${port}. Click here: http://localhost:${port}`)
});

app.listen({port: port});
