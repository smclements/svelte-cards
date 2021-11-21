import { c as create_ssr_component, e as escape, b as add_attribute } from "./app-8944d275.js";
var card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-9i6ush.svelte-9i6ush,.svelte-9i6ush.svelte-9i6ush::before,.svelte-9i6ush.svelte-9i6ush::after{box-sizing:border-box}.btn.svelte-9i6ush.svelte-9i6ush{background-color:var(--bg);border:1px solid #cccccc;color:var(--fg);padding:0.5rem;text-transform:lowercase;min-width:4rem}.card__footer.svelte-9i6ush .btn.svelte-9i6ush:hover{background-color:yellowgreen;color:var(--fg)}.btnInfo.svelte-9i6ush.svelte-9i6ush{height:2rem;border:none;background-color:inherit}.btnInfo.svelte-9i6ush>svg.svelte-9i6ush{margin-top:-16px}.card.svelte-9i6ush.svelte-9i6ush{background-color:inherit;border-radius:0.25rem;box-shadow:0 20px 40px -14px rgba(0, 0, 0, 0.25);display:flex;flex-direction:column;overflow:hidden;flex-grow:1}.card__content.svelte-9i6ush.svelte-9i6ush{display:flex;flex:1 1 auto;flex-direction:column;padding:1rem;transition:transform 0.4s;transform-style:preserve-3d;background-color:var(--bg-light)}.card__footer.svelte-9i6ush.svelte-9i6ush{display:flex;justify-content:space-between;background:inherit;width:100%;margin-top:auto}.card__footer_right.svelte-9i6ush.svelte-9i6ush{align-self:center}.card__info.svelte-9i6ush.svelte-9i6ush{display:flex;justify-content:space-between;width:100%}.card__info_text.svelte-9i6ush.svelte-9i6ush{color:var(--fg);font-size:0.7rem;font-weight:300}.card__title.svelte-9i6ush.svelte-9i6ush{color:var(--fg);font-size:1.25rem;font-weight:300;letter-spacing:2px;text-transform:uppercase;margin-top:0.5rem}.card__text.svelte-9i6ush.svelte-9i6ush{flex:1 1 auto;font-size:0.875rem;line-height:1.5}.sliderLabel.svelte-9i6ush.svelte-9i6ush{display:flex}.sliderLabel.svelte-9i6ush span.svelte-9i6ush{margin-right:0.75rem}.sliderLabel.svelte-9i6ush input.svelte-9i6ush{width:100px}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let responseMsg;
  let { question = {
    id: 0,
    heading: "",
    text: "",
    owner: "",
    responses: 1,
    expires: "",
    info: ""
  } } = $$props;
  let approxCount = Math.floor(question.responses / 100) * 100;
  if (approxCount > 0) {
    responseMsg = "More than " + approxCount + " responses";
  }
  console.log("approxCount == " + approxCount);
  let sliderValue = 0;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css);
  responseMsg = "Fewer than 100 responses";
  return `<div class="${"card svelte-9i6ush"}"><div class="${"card__content svelte-9i6ush"}"><div class="${"card__info svelte-9i6ush"}"><div class="${"card__info_text svelte-9i6ush"}">${escape(responseMsg)}</div>
			<button class="${"btn card__btn btnInfo svelte-9i6ush"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-9i6ush"}"><circle cx="${"16"}" cy="${"16"}" r="${"16"}" fill="${"#999999"}" class="${"svelte-9i6ush"}"></circle><text x="${"16"}" y="${"25"}" style="${"font:1.5rem sans-serif;font-weight:800;fill:#fff;text-anchor:middle;vertical-align:middle"}" class="${"svelte-9i6ush"}">i</text></svg></button></div>

		<div class="${"card_question svelte-9i6ush"}"><div class="${"card__title svelte-9i6ush"}">${escape(question.heading)}</div>
			<p class="${"card__text svelte-9i6ush"}">${escape(question.text)}</p></div>

		${``}

		<div class="${"card__footer svelte-9i6ush"}"><button class="${"btn card__btn svelte-9i6ush"}">Share
				<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" style="${"margin-bottom: -2px"}" class="${"svelte-9i6ush"}"><path fill="${"currentColor"}" d="${"M9 3.88V0l6 6-6 6V8.03C2.02 7.87 2.32 12.78 4.1 16-.3 11.26.64 3.66 9 3.88z"}" class="${"svelte-9i6ush"}"></path></svg></button>		

			<div class="${"card__footer_right svelte-9i6ush"}">${question.footerType == 0 ? `<button class="${"btn card__btn svelte-9i6ush"}">Yes</button>
					<button class="${"btn card__btn svelte-9i6ush"}">No</button>` : `${question.footerType == 1 ? `<label class="${"sliderLabel svelte-9i6ush"}"><span class="${"svelte-9i6ush"}">${escape(sliderValue)}</span>
						<input type="${"range"}" min="${"0"}" max="${"100"}" step="${"5"}" class="${"svelte-9i6ush"}"${add_attribute("value", sliderValue, 0)}></label>` : ``}`}</div></div></div>
</div>`;
});
export { Card as default };
