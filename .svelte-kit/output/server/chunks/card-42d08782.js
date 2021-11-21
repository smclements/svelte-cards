import { c as create_ssr_component, e as escape, b as add_attribute, a as each } from "./app-5a866464.js";
const FooterType = {
  YESNO: 0,
  RANGE: 1,
  RANKING: 2,
  MULTICHOICE: 3
};
var card_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1fbe96o.svelte-1fbe96o,.svelte-1fbe96o.svelte-1fbe96o::before,.svelte-1fbe96o.svelte-1fbe96o::after{box-sizing:border-box}.btn.svelte-1fbe96o.svelte-1fbe96o{background-color:var(--bg);border:1px solid #cccccc;color:var(--fg);padding:0.5rem;text-transform:lowercase;min-width:4rem}.card__footer.svelte-1fbe96o .btn.svelte-1fbe96o:hover{background-color:yellowgreen;color:var(--fg)}.btnInfo.svelte-1fbe96o.svelte-1fbe96o{height:2rem;border:none;background-color:inherit}.btnInfo.svelte-1fbe96o>svg.svelte-1fbe96o{margin-top:-16px}.card.svelte-1fbe96o.svelte-1fbe96o{background-color:inherit;border-radius:0.25rem;box-shadow:0 20px 40px -14px rgba(0, 0, 0, 0.25);display:flex;flex-direction:column;overflow:hidden;flex-grow:1}.card__content.svelte-1fbe96o.svelte-1fbe96o{display:flex;flex:1 1 auto;flex-direction:column;padding:1rem;transition:transform 0.4s;transform-style:preserve-3d;background-color:var(--bg-light)}.card__footer.svelte-1fbe96o.svelte-1fbe96o{display:flex;justify-content:space-between;background:inherit;width:100%;margin-top:auto}.card__footer_right.svelte-1fbe96o.svelte-1fbe96o{align-self:center}.card__info.svelte-1fbe96o.svelte-1fbe96o{display:flex;justify-content:space-between;width:100%}.card__info_text.svelte-1fbe96o.svelte-1fbe96o{color:var(--fg);font-size:0.7rem;font-weight:300}.card__title.svelte-1fbe96o.svelte-1fbe96o{color:var(--fg);font-size:1.25rem;font-weight:300;letter-spacing:2px;text-transform:uppercase;margin-top:0.5rem}.card__text.svelte-1fbe96o.svelte-1fbe96o{flex:1 1 auto;font-size:0.875rem;line-height:1.5}.sliderLabel.svelte-1fbe96o.svelte-1fbe96o{display:flex}.sliderLabel.svelte-1fbe96o span.svelte-1fbe96o{margin-right:0.75rem}.sliderLabel.svelte-1fbe96o input.svelte-1fbe96o{width:100px}.card__footer.svelte-1fbe96o select.svelte-1fbe96o{background-color:var(--bg);border:1px solid #cccccc;color:var(--fg);padding:7px;min-width:150px}",
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
  let testOptions = [
    { id: 1, text: "Monday" },
    { id: 2, text: "Tuesday" },
    { id: 3, text: "Wednesday" },
    { id: 4, text: "Thursday" },
    { id: 5, text: "Friday" }
  ];
  let approxCount = Math.floor(question.responses / 100) * 100;
  let msg = "Fewer than 103 responses";
  if (+approxCount > 0) {
    msg = "More than " + approxCount + " responses";
  }
  let sliderValue = 0;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  $$result.css.add(css);
  responseMsg = msg;
  return `<div class="${"card svelte-1fbe96o"}"><div class="${"card__content svelte-1fbe96o"}"><div class="${"card__info svelte-1fbe96o"}"><div class="${"card__info_text svelte-1fbe96o"}">${escape(responseMsg)}</div>
			<button class="${"btn card__btn btnInfo svelte-1fbe96o"}"><svg width="${"24"}" height="${"24"}" viewBox="${"0 0 32 32"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1fbe96o"}"><circle cx="${"16"}" cy="${"16"}" r="${"16"}" fill="${"#999999"}" class="${"svelte-1fbe96o"}"></circle><text x="${"16"}" y="${"25"}" style="${"font:1.5rem sans-serif;font-weight:800;fill:#fff;text-anchor:middle;vertical-align:middle"}" class="${"svelte-1fbe96o"}">i</text></svg></button></div>

		<div class="${"card_question svelte-1fbe96o"}"><div class="${"card__title svelte-1fbe96o"}">${escape(question.heading)}</div>
			<p class="${"card__text svelte-1fbe96o"}">${escape(question.text)}</p></div>

		${``}

		<div class="${"card__footer svelte-1fbe96o"}"><button class="${"btn card__btn svelte-1fbe96o"}">Share
				<svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" style="${"margin-bottom: -2px"}" class="${"svelte-1fbe96o"}"><path fill="${"currentColor"}" d="${"M9 3.88V0l6 6-6 6V8.03C2.02 7.87 2.32 12.78 4.1 16-.3 11.26.64 3.66 9 3.88z"}" class="${"svelte-1fbe96o"}"></path></svg></button>		

			<div class="${"card__footer_right svelte-1fbe96o"}">${question.footerType == FooterType.YESNO ? `<button class="${"btn card__btn svelte-1fbe96o"}">Yes</button>
					<button class="${"btn card__btn svelte-1fbe96o"}">No</button>` : `${question.footerType == FooterType.RANGE ? `<label class="${"sliderLabel svelte-1fbe96o"}"><span class="${"svelte-1fbe96o"}">${escape(sliderValue)}</span>
						<input type="${"range"}" min="${"0"}" max="${"100"}" step="${"5"}" class="${"svelte-1fbe96o"}"${add_attribute("value", sliderValue, 0)}></label>` : `${question.footerType == FooterType.MULTICHOICE ? `<select class="${"svelte-1fbe96o"}">${each(testOptions, (testOption) => `<option${add_attribute("value", testOption, 0)} class="${"svelte-1fbe96o"}">${escape(testOption.text)}
							</option>`)}</select>` : ``}`}`}</div></div></div>
</div>`;
});
var card = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": Card
});
export { Card as C, FooterType as F, card as c };
