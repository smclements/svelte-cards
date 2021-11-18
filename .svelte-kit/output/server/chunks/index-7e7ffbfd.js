import { c as create_ssr_component, v as validate_component, e as escape, a as each } from "./app-0c28a6fa.js";
import Card from "./card-52d08d3c.js";
/* empty css                                                     */const css$1 = {
  code: "button.svelte-10xz8oz{position:relative;width:2em;height:2em;text-indent:-9999px;background-color:transparent;border:none;opacity:0.4}.nice.svelte-10xz8oz{outline:none}svg.svelte-10xz8oz{position:absolute;width:100%;height:100%;right:0;bottom:0}path.svelte-10xz8oz{fill:var(--fg);transition:opacity 0.6s}.dark.svelte-10xz8oz{opacity:0}",
  map: null
};
const ThemeToggler = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let theme = "light";
  try {
    theme = localStorage.theme;
  } catch (e) {
  }
  $$result.css.add(css$1);
  return `<button aria-label="${"Toggle theme"}" title="${"Toggle theme"}" class="${["svelte-10xz8oz", ""].join(" ").trim()}"><svg viewBox="${"0 0 24 24"}" class="${"svelte-10xz8oz"}"><path class="${"light svelte-10xz8oz"}" d="${"M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"}"></path><path class="${"dark svelte-10xz8oz"}" d="${"M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"}"></path></svg>
</button>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".login.svelte-1cao5ge.svelte-1cao5ge{display:flex;justify-content:space-between;align-items:center}.cards.svelte-1cao5ge.svelte-1cao5ge{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0;background-color:var(--bg);transition:background-color 0.6s}.cards__item.svelte-1cao5ge.svelte-1cao5ge{display:flex;padding:1rem;width:100%}@media(min-width: 40rem){.cards__item.svelte-1cao5ge.svelte-1cao5ge{width:44%}}@media(min-width: 80rem){.cards__item.svelte-1cao5ge.svelte-1cao5ge{width:30%}}.content.svelte-1cao5ge.svelte-1cao5ge{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}ul.svelte-1cao5ge.svelte-1cao5ge{padding:0}li.svelte-1cao5ge.svelte-1cao5ge{list-style:none;margin-bottom:1em;width:100%}.preamble.svelte-1cao5ge.svelte-1cao5ge{margin-left:2rem;color:var(--fg-light)}.preamble.svelte-1cao5ge>.login.svelte-1cao5ge{display:flex;justify-content:space-between}button.logo.svelte-1cao5ge.svelte-1cao5ge{border:none;background-color:transparent}button.signin.svelte-1cao5ge.svelte-1cao5ge{border:none;background-color:transparent;color:var(--fg);font-size:1.75em;margin-right:1.75rem}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let questions = [
    {
      id: 1,
      heading: "Politics",
      text: "Should Auckland come out of lockdown? Auckland and parts of Waikato are at Alert Level 3 Step 2. Settings for Auckland will be reviewed on Monday 22 November 2021",
      owner: "Dylan",
      responses: 1e3,
      expires: "02:00:00",
      info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
    },
    {
      id: 2,
      heading: "Etiquette",
      text: "Should pineapple go on pizza? The truth is that this sweet fruit has no business on pizza, and everyone knows it, but for those who need explained in detail...",
      owner: "Concerned Chef",
      responses: 1e4,
      expires: "00:06:00",
      info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
    },
    {
      id: 3,
      heading: "Education",
      text: "Should schools be closed for the rest of the year?",
      owner: "Department of Education",
      responses: 200,
      expires: "00:00:05",
      info: "Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."
    },
    {
      id: 4,
      heading: "Public Health",
      text: "Is 90% vaccination rate high enough? The 90 percent vaccination milestone is higher than what we would have initially imagined but we need to keep going, he says, it is not a target - it is a milestone.",
      owner: "Dylan",
      responses: 1620,
      expires: "02:30:00",
      info: "Lorem ipsum dolor sit amet consectetur adipiscing elit cum tempus neque, sociis fusce leo aptent purus vestibulum aliquet blandit facilisis felis quam, sodales porta justo montes dui litora ac nisl lacinia."
    },
    {
      id: 5,
      heading: "Public Health",
      text: "Will you take a booster shot? Ultimately the booster shots will be available to everyone, though those initially seeking a third shot will be the over-65s, border workers and medical staff - the first cohort to be vaccinated earlier this year.",
      owner: "CDHB",
      responses: 400,
      expires: "00:06:00",
      info: "Nullam integer scelerisque tortor cum eget tempus vulputate iaculis curabitur, molestie vitae ac dapibus natoque aliquam orci duis, congue porta metus fames at potenti ligula mollis."
    },
    {
      id: 6,
      heading: "Public Health",
      text: "Is the government backtracking? It is looking increasingly likely the whole country will move to the Covid-19 traffic light system before every district health board (DHB) has hit 90 percent fully vaccinated.",
      owner: "Department of Education",
      responses: 1350,
      expires: "00:00:05",
      info: "Vestibulum nec augue diam tempor ante a ultricies suspendisse mus tortor id, lacus elit dis commodo curae fermentum ligula eget montes proin."
    }
  ];
  let displayDate = new Date();
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Abhi&#39;s App</title>`, ""}<link rel="${"stylesheet"}" href="${"https://fonts.googleapis.com/css?family=Roboto:300,400,500"}" data-svelte="svelte-j7na1"><link rel="${"stylesheet"}" href="${"https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"}" data-svelte="svelte-j7na1">`, ""}

<div class="${"content svelte-1cao5ge"}"><div class="${"preamble svelte-1cao5ge"}"><div class="${"login svelte-1cao5ge"}"><button class="${"logo svelte-1cao5ge"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"64"}" height="${"64"}" viewBox="${"0 0 512 512"}" style="${"enable-background:new 0 0 512 512"}" xml:space="${"preserve"}"><path style="${"fill:#c3e678"}" d="${"M238.345 189.773h247.172c14.626 0 26.483 11.857 26.483 26.483v158.897c0 14.626-11.857 26.483-26.483 26.483H344.276v29.116c0 5.544-6.702 8.32-10.622 4.399l-33.516-33.515h-61.793c-14.626 0-26.483-11.857-26.483-26.483V216.256c0-14.626 11.857-26.483 26.483-26.483z"}"></path><path style="${"fill:#a5d76e"}" d="${"M211.862 216.256v158.897c0 1.9.218 3.746.599 5.534 61.705-24.77 105.332-85.043 105.332-155.603 0-12.122-1.353-23.918-3.795-35.31h-75.654c-14.625-.001-26.482 11.856-26.482 26.482z"}"></path><path style="${"fill:#ff6464"}" d="${"M300.138 225.083c0-82.881-67.188-150.069-150.069-150.069S0 142.202 0 225.083c0 72.598 51.555 133.146 120.05 147.054l45.199 45.199c4.171 4.171 11.303 1.217 11.303-4.682v-39.978c70.228-12.525 123.586-73.764 123.586-147.593z"}"></path><circle style="${"fill:#d2555a"}" cx="${"150.069"}" cy="${"225.125"}" r="${"114.759"}"></circle><path style="${"fill:#fff"}" d="${"M150.074 304.582h-.011c-4.875 0-8.833-3.957-8.833-8.833v-.012c0-4.875 3.957-8.833 8.833-8.833h.011c4.875 0 8.833 3.957 8.833 8.833v.01c.001 4.878-3.957 8.835-8.833 8.835zM361.931 348.67a8.801 8.801 0 0 1-6.242-2.585l-44.138-44.138a8.825 8.825 0 0 1 0-12.483 8.827 8.827 0 0 1 12.483 0l37.897 37.895 82.034-82.034a8.827 8.827 0 0 1 12.483 0 8.825 8.825 0 0 1 0 12.483l-88.276 88.276a8.794 8.794 0 0 1-6.241 2.586zM150.069 269.261a8.829 8.829 0 0 1-8.828-8.828v-2.637c0-11.743 7.631-21.921 18.989-25.327 14.806-4.44 25.148-18.349 25.149-33.826.001-9.183-3.741-17.983-10.536-24.778-6.794-6.794-15.592-10.536-24.775-10.536h-.003c-19.469.001-35.308 15.841-35.308 35.31a8.829 8.829 0 0 1-17.656 0c0-29.203 23.758-52.963 52.962-52.966h.004c13.898 0 27.128 5.578 37.258 15.706 10.13 10.13 15.708 23.363 15.706 37.262-.002 23.211-15.518 44.074-37.732 50.735-3.831 1.149-6.406 4.531-6.406 8.416v2.637a8.822 8.822 0 0 1-8.824 8.832z"}"></path></svg></button>
			<div style="${"display:flex"}"><button class="${"signin svelte-1cao5ge"}">Sign in</button>
				${validate_component(ThemeToggler, "ThemeToggler").$$render($$result, {}, {}, {})}</div></div>

		<h2>${escape(displayDate.toLocaleDateString("nz-NZ", { weekday: "long" }))}, ${escape(displayDate.toLocaleDateString())}</h2>

		<h2>You have questions!</h2></div>

	<ul class="${"cards svelte-1cao5ge"}">${each(questions, (question, index) => `<li class="${"cards__item svelte-1cao5ge"}">${validate_component(Card, "Card").$$render($$result, { question }, {}, {})}
			</li>`)}</ul>
</div>`;
});
export { Routes as default };
