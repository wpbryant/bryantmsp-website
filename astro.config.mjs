// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://bryantmsp.com",
	integrations: [
		react(),
		tailwind({
			applyBaseStyles: false,
		}),
		mdx(),
		sitemap(),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
