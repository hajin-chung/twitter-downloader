import { Handlers } from "$fresh/server.ts";
import { updateDownload } from "../../utils/db.ts";

export const handler: Handlers = {
  async GET(req) {
    try {
      const url = new URL(req.url);
      const tweet = url.searchParams.get("tweet");
      if (!tweet) {
        return new Response(JSON.stringify({ error: true }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      const id = new URL(tweet).pathname.split("/").at(-1);
      if (!id) {
        return new Response(JSON.stringify({ error: true }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }

      const res = await fetch(`https://tweetpik.com/api/tweets/${id}/video`);
      const data = await res.json();
      const videoUrl =
        data.variants.sort((a: { bitrate: number }, b: { bitrate: number }) =>
          b.bitrate - a.bitrate
        )[0].url;

      updateDownload(tweet, videoUrl);
      return new Response(JSON.stringify({ url: videoUrl }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify(err), { status: 200 });
    }
  },
};
