import requestHandler from "./api/index.ts";

const port = Number(Deno.env.get("PORT")) || 8080;

Deno.serve({ port, hostname: "0.0.0.0" }, requestHandler);
