import { c as create_ssr_component, e as escape } from "./app-df48a99b.js";
var card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-14rftba.svelte-14rftba,.svelte-14rftba.svelte-14rftba::before,.svelte-14rftba.svelte-14rftba::after{box-sizing:border-box}.btn.svelte-14rftba.svelte-14rftba{background-color:white;border:1px solid #cccccc;color:#999999;padding:0.5rem;text-transform:lowercase;min-width:4rem}.card__footer.svelte-14rftba .btn.svelte-14rftba:hover{background-color:yellowgreen;color:#333333}.btnInfo.svelte-14rftba.svelte-14rftba{height:2rem;border:none}.btnInfo.svelte-14rftba>svg.svelte-14rftba{margin-top:-16px}.card.svelte-14rftba.svelte-14rftba{background-color:white;border-radius:0.25rem;box-shadow:0 20px 40px -14px rgba(0, 0, 0, 0.25);display:flex;flex-direction:column;overflow:hidden;flex-grow:1}.card__content.svelte-14rftba.svelte-14rftba{display:flex;flex:1 1 auto;flex-direction:column;padding:1rem;transition:transform 0.4s;transform-style:preserve-3d}.card__footer.svelte-14rftba.svelte-14rftba{display:flex;justify-content:space-between;background:aliceblue;width:100%;margin-top:auto}.card__info.svelte-14rftba.svelte-14rftba{display:flex;justify-content:space-between;width:100%}.card__info_text.svelte-14rftba.svelte-14rftba{color:#696969;font-size:0.7rem;font-weight:300}.card__title.svelte-14rftba.svelte-14rftba{color:#696969;font-size:1.25rem;font-weight:300;letter-spacing:2px;text-transform:uppercase;margin-top:0.5rem}.card__text.svelte-14rftba.svelte-14rftba{flex:1 1 auto;font-size:0.875rem;line-height:1.5}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  let approxCount = Math.floor(question.responses / 100) * 100;
  let responseMsg = "Fewer than 100 responses";
  if (approxCount > 0) {
    responseMsg = "More than " + approxCount + " responses";
  }
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css);
  return `<div class="${"card svelte-14rftba"}"><div class="${"card__content svelte-14rftba"}"><div class="${"card__info svelte-14rftba"}"><div class="${"card__info_text svelte-14rftba"}">${escape(responseMsg)}</div>
			<button class="${"btn card__btn btnInfo svelte-14rftba"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-14rftba"}"><circle cx="${"16"}" cy="${"16"}" r="${"16"}" fill="${"#999999"}" class="${"svelte-14rftba"}"></circle><text x="${"16"}" y="${"25"}" style="${"font:1.5rem sans-serif;font-weight:800;fill:#fff;text-anchor:middle;vertical-align:middle"}" class="${"svelte-14rftba"}">i</text></svg></button></div>

		<div class="${"card_question svelte-14rftba"}"><div class="${"card__title svelte-14rftba"}">${escape(question.heading)}</div>
			<p class="${"card__text svelte-14rftba"}">${escape(question.text)}</p></div>

		${``}

		<div class="${"card__footer svelte-14rftba"}"><button class="${"btn card__btn svelte-14rftba"}">Share
				<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" style="${"margin-bottom: -2px"}" class="${"svelte-14rftba"}"><path fill="${"currentColor"}" d="${"M9 3.88V0l6 6-6 6V8.03C2.02 7.87 2.32 12.78 4.1 16-.3 11.26.64 3.66 9 3.88z"}" class="${"svelte-14rftba"}"></path></svg></button>		<div class="${"svelte-14rftba"}"><button class="${"btn card__btn svelte-14rftba"}">Yes</button>
				<button class="${"btn card__btn svelte-14rftba"}">No</button></div></div></div>
</div>`;
});
export { Card as default };
