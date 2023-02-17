import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const dbURL = Deno.env.get("DATABASE_URL");

export const db = new Client(dbURL);

export const updateDownload = async (tweet: string, video: string) => {
  await db.connect();
  const createdAt = Date.now();
  await db.queryArray(
    "INSERT INTO downloads (tweet, video, createdAt) VALUES($1, $2, $3)",
    [tweet, video, createdAt],
  );
};
