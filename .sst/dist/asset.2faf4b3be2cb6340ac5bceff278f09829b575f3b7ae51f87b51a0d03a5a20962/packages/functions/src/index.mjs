import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// packages/functions/src/index.ts
import { PrismaClient } from "@prisma/client";
var client = new PrismaClient();
var handler = /* @__PURE__ */ __name(async () => {
  try {
    const result = await client.post.findMany();
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (ex) {
    return {
      statusCode: 200,
      body: ex.toString()
    };
  }
}, "handler");
export {
  handler
};
//# sourceMappingURL=index.mjs.map
