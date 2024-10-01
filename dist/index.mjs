// _sentry-release-injection-stub
var _global = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
_global.SENTRY_RELEASE = { id: "246b381eae2a52d39cf528fb557f601d20a910d9" };

// src/index.ts?sentryProxyModule=true
import "_sentry-debug-id-injection-stub";

// src/instrument.ts
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";
Sentry.init({
  dsn: "",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration()
  ],
  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1,
  // Set sampling rate for profiling
  // This is relative to tracesSampleRate
  profilesSampleRate: 1
});

// src/index.ts
import { serve } from "@hono/node-server";
import { Hono } from "hono";
var app = new Hono();
app.get("/", (c) => {
  return c.text("Hello Hono!");
});
var port = 3e3;
console.log(`Server is running on port ${port}`);
serve({
  fetch: app.fetch,
  port
});
var src_default = app;

// src/index.ts?sentryProxyModule=true
var src_default2 = src_default;
export {
  src_default2 as default
};
//# sourceMappingURL=index.mjs.map