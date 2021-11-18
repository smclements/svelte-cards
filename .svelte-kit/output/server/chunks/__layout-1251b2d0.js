import { g as getContext, c as create_ssr_component, s as subscribe } from "./app-0c28a6fa.js";
/* empty css                                                     */const getStores = () => {
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
  return `<main class="${"svelte-380e9o"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export { _layout as default };
