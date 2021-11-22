import { g as getContext, c as create_ssr_component, s as subscribe, a as add_attribute, v as validate_component } from "./app-4ea2f2a8.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/app-logo-ee3dc53f.svg";
var ThemeToggler_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-10xz8oz{position:relative;width:2em;height:2em;text-indent:-9999px;background-color:transparent;border:none;opacity:0.4}.nice.svelte-10xz8oz{outline:none}svg.svelte-10xz8oz{position:absolute;width:100%;height:100%;right:0;bottom:0}path.svelte-10xz8oz{fill:var(--fg);transition:opacity 0.6s}.dark.svelte-10xz8oz{opacity:0}",
  map: null
};
const ThemeToggler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme = "light";
  try {
    theme = localStorage.theme;
  } catch (e) {
  }
  $$result.css.add(css$2);
  return `<button aria-label="${"Toggle theme"}" title="${"Toggle theme"}" class="${["svelte-10xz8oz", ""].join(" ").trim()}"><svg viewBox="${"0 0 24 24"}" class="${"svelte-10xz8oz"}"><path class="${"light svelte-10xz8oz"}" d="${"M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"}"></path><path class="${"dark svelte-10xz8oz"}" d="${"M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"}"></path></svg>
</button>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1olh9b7.svelte-1olh9b7{display:flex;justify-content:space-between;position:relative;width:100%;z-index:10;overflow:hidden;background-color:var(--bg);border-bottom:1px solid var(--fg)}nav.svelte-1olh9b7.svelte-1olh9b7{display:flex;justify-content:center;--background:transparent}ul.svelte-1olh9b7.svelte-1olh9b7{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-1olh9b7.svelte-1olh9b7{position:relative;height:100%}li.active.svelte-1olh9b7.svelte-1olh9b7::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-1olh9b7 a.svelte-1olh9b7{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-1olh9b7.svelte-1olh9b7:hover{color:var(--accent-color)}.logo.svelte-1olh9b7.svelte-1olh9b7{width:3em;height:3em;margin-left:1em;display:flex;align-items:center;justify-content:center}.logo.svelte-1olh9b7 img.svelte-1olh9b7{width:100%;height:100%;object-fit:contain}.themeToggler.svelte-1olh9b7.svelte-1olh9b7{height:3em;display:flex;align-items:center;justify-content:center;margin-right:0.5em}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-1olh9b7"}"><a class="${"logo svelte-1olh9b7"}" href="${"/"}"><img${add_attribute("src", logo, 0)} alt="${"AbhiApp"}" class="${"svelte-1olh9b7"}"></a>
	

	<nav class="${"svelte-1olh9b7"}"><ul class="${"svelte-1olh9b7"}"><li class="${["svelte-1olh9b7", $page.path === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1olh9b7"}">Home</a></li>
			<li class="${["svelte-1olh9b7", $page.path === "/about" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/about"}" class="${"svelte-1olh9b7"}">About</a></li>
			<li class="${["svelte-1olh9b7", $page.path === "/settings" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/settings"}" class="${"svelte-1olh9b7"}">Settings</a></li>
			<li class="${["svelte-1olh9b7", $page.path === "/signin" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/signin"}" class="${"svelte-1olh9b7"}">Sign in</a></li></ul></nav>

    <div class="${"themeToggler svelte-1olh9b7"}">${validate_component(ThemeToggler, "ThemeToggler").$$render($$result, {}, {}, {})}</div>  
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-380e9o{position:relative;max-width:90rem;padding:2em;margin:0 auto;box-sizing:border-box}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $page.path.split("/")[1];
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-380e9o"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout as default };
