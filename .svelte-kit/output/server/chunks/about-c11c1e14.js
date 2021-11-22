import { c as create_ssr_component, v as validate_component } from "./app-4ea2f2a8.js";
import { C as Card, F as FooterType } from "./card-845b3c23.js";
const browser = false;
const dev = false;
var about_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-12of6aj{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}.wrapper.svelte-12of6aj{display:flex;width:100%;justify-content:center;align-items:center}.innerWrapper.svelte-12of6aj{display:flex;max-width:350px}",
  map: null
};
const hydrate = dev;
const router = browser;
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let question = {
    id: 1,
    heading: "Etiquette",
    text: "Should pineapple go on pizza? The truth is that this sweet fruit has no business on pizza, and everyone knows it, but for those who need explained in detail...",
    owner: "Concerned Chef",
    responses: 1e4,
    expires: "00:06:00",
    footerType: FooterType.YESNO,
    info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}

<div class="${"content svelte-12of6aj"}"><h1>About this app</h1>

	<p>The purpose of this app is to quickly poll the user on a variety of topics / interests. The poll is intended to be a low friction way to quickly assemble a variety of inputs from the target audience. 
    </p>

	<p>Please refer to our <a href="${"./privacy"}">Privacy Policy</a> for a simple breakdown on how we use the data that you supply to us. 
    </p>

    <h1>Using this app</h1>
    <p>The application will show you a series of questions. You choose whether you would like to respond to the question. An interactive example of our question card is shown below. As you interact with the example, we will show you a description of what the element does, and how to interpret what is shown.
    </p>

    <p><i>Make the following card report back details of what the user has touched, show the details below.</i></p>

    <div class="${"wrapper svelte-12of6aj"}"><div class="${"innerWrapper svelte-12of6aj"}">${validate_component(Card, "Card").$$render($$result, { question, numberSections: true }, {}, {})}</div></div>

</div>`;
});
export { About as default, hydrate, prerender, router };
