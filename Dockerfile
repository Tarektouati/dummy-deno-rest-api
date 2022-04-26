FROM denoland/deno:latest

WORKDIR /app

COPY ./src ./

RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]
