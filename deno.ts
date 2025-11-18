import { miaHandleRequest } from "https://raw.githubusercontent.com/aimuz/mia-core/main/mod.ts";

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
