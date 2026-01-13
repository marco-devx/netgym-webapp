import path from "node:path";
import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const rawBasePath = import.meta.env.PUBLIC_BASE_PATH || "/";
const basePath = rawBasePath === "/" ? "" : rawBasePath.replace(/\/$/, "");

export default defineConfig({
	plugins: [pluginReact()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@guards": path.resolve(__dirname, "src/guards"),
			"@constants": path.resolve(__dirname, "src/constants"),
			"@store": path.resolve(__dirname, "src/store"),
			"@utils": path.resolve(__dirname, "src/utils"),
			"@api": path.resolve(__dirname, "src/services"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@assets": path.resolve(__dirname, "src/assets"),
			"@pages": path.resolve(__dirname, "src/pages"),
			"@types": path.resolve(__dirname, "src/types"),
			"@config": path.resolve(__dirname, "src/config"),
			"@icons": path.resolve(__dirname, "src/assets/icons"),
		},
	},
	output: {
		assetPrefix: `${basePath}/`,
	},
	html: {
		title: "NetGym",
	},
	server: {
		base: basePath,
	},
});
