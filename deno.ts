import { miaHandleRequest } from "https://cdn.jsdelivr.net/gh/aimuz/mia-core/mod.ts";

Deno.serve((req: Request) =>
  miaHandleRequest(req, {
    url: "go.aimuz.me",
    quiet: false,
    packages: [
      {
        prefix: "termi",
        repo: "https://github.com/aimuz/termi",
      },
    ],
  })
);
