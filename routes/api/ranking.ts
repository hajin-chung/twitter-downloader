import { Handlers } from "$fresh/server.ts";

export const Handler: Handlers = {
  GET(_req) {
    // fetch ranking
    return new Response(JSON.stringify([
      {
        tweet: "dsafds",
        url: "dsfads",
      },
      {
        tweet: "dsafds",
        url: "dsfads",
      },
      {
        tweet: "dsafds",
        url: "dsfads",
      },
      {
        tweet: "dsafds",
        url: "dsfads",
      },
    ]));
  },
};
