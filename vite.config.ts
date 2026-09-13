import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  assetsInclude: ["**/*.jfif"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks — large libraries split out for better caching
          "vendor-react": ["react", "react-dom"],
          "vendor-motion": ["framer-motion"],
          "vendor-gsap": ["gsap"],
          "vendor-router": ["react-router-dom"],
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
    // Increase warning threshold slightly (we have large assets)
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "gsap",
      "react-router-dom",
      "@tanstack/react-query",
    ],
  },
}));
