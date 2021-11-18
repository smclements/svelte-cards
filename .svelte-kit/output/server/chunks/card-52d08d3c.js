import { c as create_ssr_component, e as escape } from "./app-0c28a6fa.js";
var card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-avdzkc.svelte-avdzkc,.svelte-avdzkc.svelte-avdzkc::before,.svelte-avdzkc.svelte-avdzkc::after{box-sizing:border-box}.btn.svelte-avdzkc.svelte-avdzkc{background-color:var(--bg);border:1px solid #cccccc;color:var(--fg);padding:0.5rem;text-transform:lowercase;min-width:4rem}.card__footer.svelte-avdzkc .btn.svelte-avdzkc:hover{background-color:yellowgreen;color:var(--fg)}.btnInfo.svelte-avdzkc.svelte-avdzkc{height:2rem;border:none;background-color:inherit}.btnInfo.svelte-avdzkc>svg.svelte-avdzkc{margin-top:-16px}.card.svelte-avdzkc.svelte-avdzkc{background-color:inherit;border-radius:0.25rem;box-shadow:0 20px 40px -14px rgba(0, 0, 0, 0.25);display:flex;flex-direction:column;overflow:hidden;flex-grow:1}.card__content.svelte-avdzkc.svelte-avdzkc{display:flex;flex:1 1 auto;flex-direction:column;padding:1rem;transition:transform 0.4s;transform-style:preserve-3d;background-color:var(--bg-light)}.card__footer.svelte-avdzkc.svelte-avdzkc{display:flex;justify-content:space-between;background:inherit;width:100%;margin-top:auto}.card__info.svelte-avdzkc.svelte-avdzkc{display:flex;justify-content:space-between;width:100%}.card__info_text.svelte-avdzkc.svelte-avdzkc{color:var(--fg);font-size:0.7rem;font-weight:300}.card__title.svelte-avdzkc.svelte-avdzkc{color:var(--fg);font-size:1.25rem;font-weight:300;letter-spacing:2px;text-transform:uppercase;margin-top:0.5rem}.card__text.svelte-avdzkc.svelte-avdzkc{flex:1 1 auto;font-size:0.875rem;line-height:1.5}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  if (!question) {
    question = {
      id: 1,
      heading: "Politics",
      text: "Should Auckland come out of lockdown? Auckland and parts of Waikato are at Alert Level 3 Step 2. Settings for Auckland will be reviewed on Monday 22 November 2021",
      owner: "Dylan",
      responses: 1e3,
      expires: "02:00:00",
      info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
    };
  }
  Math.floor(question.responses / 100) * 100;
  let responseMsg = "Fewer than 100 responses";
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css);
  return `<div class="${"card svelte-avdzkc"}"><div class="${"card__content svelte-avdzkc"}"><div class="${"card__info svelte-avdzkc"}"><div class="${"card__info_text svelte-avdzkc"}">${escape(responseMsg)}</div>
			<button class="${"btn card__btn btnInfo svelte-avdzkc"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-avdzkc"}"><circle cx="${"16"}" cy="${"16"}" r="${"16"}" fill="${"#999999"}" class="${"svelte-avdzkc"}"></circle><text x="${"16"}" y="${"25"}" style="${"font:1.5rem sans-serif;font-weight:800;fill:#fff;text-anchor:middle;vertical-align:middle"}" class="${"svelte-avdzkc"}">i</text></svg></button></div>

		<div class="${"card_question svelte-avdzkc"}"><div class="${"card__title svelte-avdzkc"}">${escape(question.heading)}</div>
			<p class="${"card__text svelte-avdzkc"}">${escape(question.text)}</p></div>

		${``}

		<div class="${"card__footer svelte-avdzkc"}"><button class="${"btn card__btn svelte-avdzkc"}">Share
				<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" style="${"margin-bottom: -2px"}" class="${"svelte-avdzkc"}"><path fill="${"currentColor"}" d="${"M9 3.88V0l6 6-6 6V8.03C2.02 7.87 2.32 12.78 4.1 16-.3 11.26.64 3.66 9 3.88z"}" class="${"svelte-avdzkc"}"></path></svg></button>		<div class="${"svelte-avdzkc"}"><button class="${"btn card__btn svelte-avdzkc"}">Yes</button>
				<button class="${"btn card__btn svelte-avdzkc"}">No</button></div></div></div>
</div>`;
});
export { Card as default };
