import { defineConfig } from "tsup";
import { sentryEsbuildPlugin } from "@sentry/esbuild-plugin";

export default defineConfig({
  entry: ["src/nodeServer.ts"],
  shims: true,
  bundle: true,
  esbuildPlugins: [
    sentryEsbuildPlugin({
      org: "ex0ns",
      project: "javascript",
      authToken: process.env.SENTRY_AUTH_TOKEN,
      telemetry: false,
      debug: true,
    }),
  ],
  format: ["esm"],
  noExternal: ["@mm/shared", "@mm/lib"],
  env: {
    NODE_ENV: "production",
  },
  dts: false,
  splitting: false,
  sourcemap: true,
  clean: true,
});
