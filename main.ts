import requestHandler from "./api/index.ts";

// Vercel's container router sends traffic to port 80 unless the PORT
// environment variable is set in the project, so default to 80 here.
const port = Number(Deno.env.get("PORT")) || 80;

// Deno.serve is the built-in HTTP server. The old std/http `serve()` relied on
// Deno.serveHttp, which was removed in Deno 2.
Deno.serve({ port, hostname: "0.0.0.0" }, requestHandler);
