import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import { Video } from "./types.ts";

const dbURL = Deno.env.get("DATABASE_URL");

export const db = new Client(dbURL);

export const updateDownload = async (tweet: string, video: string) => {
  await db.connect();
  const createdAt = Date.now();
  await db.queryArray(
    "INSERT INTO downloads (tweet, video, createdAt) VALUES($1, $2, $3)",
    [tweet, video, createdAt],
  );
  db.end();
};

export const getLive = async (offset: number) => {
  await db.connect();

  const ret = await db.queryObject<Video>(
    "SELECT tweet, video FROM downloads ORDER BY createdAt desc LIMIT 10 OFFSET $1",
    [offset],
  );
  db.end();
  return ret;
};
