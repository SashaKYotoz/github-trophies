FROM denoland/deno:latest

WORKDIR /app

# Vercel routes requests to $PORT (80 by default). Keep these in sync.
ENV PORT=80
EXPOSE 80

COPY . .

# Download and cache all remote dependencies at build time
RUN deno cache main.ts

CMD ["deno", "run", "-A", "main.ts"]
