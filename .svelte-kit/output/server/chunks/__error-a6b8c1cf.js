import { c as create_ssr_component, e as escape } from "./app-4ea2f2a8.js";
var __error_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-akq949{margin:0 auto}h1.svelte-akq949{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}@media(min-width: 480px){h1.svelte-akq949{font-size:4em}}",
  map: null
};
function load({ error, status }) {
  return { props: { error, status } };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { error } = $$props;
  const offline = typeof navigator !== "undefined" && navigator.onLine === false;
  const title = offline ? "Offline" : status;
  const message = offline ? "Find the internet and try again" : error.message;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>${escape(title)}</title>`, ""}`, ""}

<h1 class="${"svelte-akq949"}">${escape(title)}</h1>

<pre>${escape(message)}</pre>

${``}
${``}`;
});
export { _error as default, load };
