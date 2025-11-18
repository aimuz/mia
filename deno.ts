import { miaHandleRequest } from "https://raw.githubusercontent.com/aimuz/mia-core/main/mod.ts";

export default {
  async fetch(request: Request): Promise<Response> {
    return miaHandleRequest(request, {
      packages: [
        {
          prefix: "termi",
          repo: "https://github.com/aimuz/termi",
        },
      ],
    });
  },
};
