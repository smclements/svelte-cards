import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width\">\n\t\t<meta name=\"theme-color\" content=\"#333333\">\n\t\n\t\t<script>\n\t\t\ttry {\n\t\t\t\tif (!('theme' in localStorage)) {\n\t\t\t\t\tlocalStorage.theme = window.matchMedia('(prefers-color-scheme: dark)').matches\n\t\t\t\t\t\t? 'dark'\n\t\t\t\t\t\t: 'light';\n\t\t\t\t}\n\t\n\t\t\t\tdocument.querySelector('html').classList.add(localStorage.theme);\n\t\t\t} catch (e) {\n\t\t\t\tconsole.error(e);\n\t\t\t}\n\t\t</script>\n\n\t\t<!-- <link rel=\"manifest\" href=\"/manifest.json\"> -->\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-16ebf74b.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-16ebf74b.js",assets + "/_app/chunks/vendor-e45dc500.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"logo.svg","size":1908,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: "src/routes/__error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: ["src/routes/__error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/card\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/card.svelte"],
						b: ["src/routes/__error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),"src/routes/__error.svelte": () => import("../../src/routes/__error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/card.svelte": () => import("../../src/routes/card.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-8181fd74.js","css":["assets/pages/__layout.svelte-fa45c76a.css","assets/ThemeToggler.svelte_svelte_type_style_lang-ca1e12c7.css"],"js":["pages/__layout.svelte-8181fd74.js","chunks/vendor-e45dc500.js"],"styles":[]},"src/routes/__error.svelte":{"entry":"pages/__error.svelte-50905911.js","css":["assets/pages/__error.svelte-e11d9de6.css"],"js":["pages/__error.svelte-50905911.js","chunks/vendor-e45dc500.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-8c56eac3.js","css":["assets/pages/index.svelte-36782fd4.css","assets/ThemeToggler.svelte_svelte_type_style_lang-ca1e12c7.css","assets/pages/card.svelte-77246889.css"],"js":["pages/index.svelte-8c56eac3.js","chunks/vendor-e45dc500.js","pages/card.svelte-27e1ba30.js"],"styles":[]},"src/routes/card.svelte":{"entry":"pages/card.svelte-27e1ba30.js","css":["assets/pages/card.svelte-77246889.css"],"js":["pages/card.svelte-27e1ba30.js","chunks/vendor-e45dc500.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}