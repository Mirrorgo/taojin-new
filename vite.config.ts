import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import copy from "rollup-plugin-copy";
import vitePluginImp from "vite-plugin-imp";
import * as fs from "fs";
import lessToJS from "less-vars-to-js";

const themeVariables = lessToJS(
  fs.readFileSync(resolve(__dirname, "./src_global/variables.less"), "utf8")
);
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      base: resolve(__dirname, "./src_global/components/base"),
      basic: resolve(__dirname, "./src_global/components/basic"),
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/lib/${name}/style/index.less`,
        },
      ],
    }),
    copy({
      targets: [
        { src: "manifest.json", dest: "dist" },
        { src: "src/assets", dest: "dist" },
      ],
      hook: "writeBundle",
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
        // 重写 less 变量，定制样式
        modifyVars: themeVariables,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, "/src_crx/popup.html"),
        options: resolve(__dirname, "/src_crx/options.html"),
        "src_crx/service_worker": "/src_crx/service_worker.ts",
        "src_crx/content_script": "/src_crx/content_script.ts",
        "src_crx/src_content_script/main":
          "/src_crx/src_content_script/main.tsx",
      },
      output: {
        chunkFileNames: "[name].[hash].js",
        assetFileNames: "[name].[hash].[ext]",
        entryFileNames: "[name].js",
        dir: "dist",
      },
    },
  },
});
