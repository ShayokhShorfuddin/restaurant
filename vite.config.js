import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                "page-2": resolve(__dirname, "page-2.html"),
                "page-3": resolve(__dirname, "page-3.html"),
                "page-4": resolve(__dirname, "page-4.html"),
                "page-5": resolve(__dirname, "page-5.html"),
                "page-6": resolve(__dirname, "page-6.html"),
                "page-9": resolve(__dirname, "page-9.html"),
                "page-10": resolve(__dirname, "page-10.html"),
                "profile-page": resolve(__dirname, "profile-page.html"),
                "order-details": resolve(__dirname, "order-details.html"),
            },
        },
    },
});