// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/download.ts";
import * as $1 from "./routes/api/live.ts";
import * as $2 from "./routes/api/ranking.ts";
import * as $3 from "./routes/index.tsx";
import * as $4 from "./routes/live.tsx";
import * as $5 from "./routes/ranking.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/Download.tsx";
import * as $$2 from "./islands/LiveList.tsx";

const manifest = {
  routes: {
    "./routes/api/download.ts": $0,
    "./routes/api/live.ts": $1,
    "./routes/api/ranking.ts": $2,
    "./routes/index.tsx": $3,
    "./routes/live.tsx": $4,
    "./routes/ranking.tsx": $5,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/Download.tsx": $$1,
    "./islands/LiveList.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
