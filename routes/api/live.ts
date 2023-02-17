import { Handlers } from "$fresh/server.ts";
import { getLive } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const offset = url.searchParams.get("offset");
    const { rows } = await getLive(offset ? parseInt(offset) : 0);
    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  },
};
