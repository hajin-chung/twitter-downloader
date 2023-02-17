import { Handlers } from "$fresh/server.ts";
import { getRanking } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET(req) {
    const url = new URL(req.url);
    const offset = url.searchParams.get("offset");
    const last = url.searchParams.get("last");
    if (!last) {
      return new Response(JSON.stringify({
        error: true,
        message: "wrong query parameters",
      }));
    }

    const from = Date.now() - parseInt(last);
    const { rows } = await getRanking(
      from.toString(),
      offset ? parseInt(offset) : 0,
    );

    return new Response(
      JSON.stringify(
        rows,
        (_, value) =>
          typeof value === "bigint" ? value.toString() + "n" : value,
      ),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  },
};
