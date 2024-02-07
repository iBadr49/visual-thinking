import { c as create_ssr_component, e as each, b as add_attribute, a as escape, n as null_to_empty, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/header.js";
import { F as Footer } from "../../../chunks/footer.js";
const css = {
  code: ':root{--vtDarkBlue:#090940;--vtLightBlue:#67c5d1;--vtYellow:#feb51e;--vtRed:#f96c4f;--vtWhite:#ffffff;--vtDarkBlue-80:#3a3a66;--vtDarkBlue-50:#6b6b8c;--vtDarkBlue-30:#9d9db3;--vtDarkBlue-10:#ceced9;--vtLightBlue-80:#85d1da;--vtLightBlue-50:#a4dce3;--vtLightBlue-30:#c2e8ed;--vtLightBlue-10:#e1f3f6;--vtYellow-80:#fec44b;--vtYellow-50:#fed378;--vtYellow-30:#ffe1a5;--vtYellow-10:#fff0d2;--vtRed-80:#fa8972;--vtRed-50:#fba795;--vtRed-30:#fdc4b9;--vtRed-10:#fee2dc;--vtGrey-80:#c0beb9;--vtGrey-50:#e0dedc;--vtGrey-10:#f9f8f8;--vtSec-Red:#af1301;--vtSec-Red-30:#fbc5b4;--vtSec-Green:#169861;--vtSec-Green-30:#63c09f;--vtSec-LightBlue:#4fbbc2;--vtSec-DarkBlue:#31439c;--vtSec-Brown:#8b3a00;--vtSec-Orange:#fe6f07;--vtPrimaryFont:"rigid-square", sans-serif;--vtSecondaryFont:"yrsa", serif}.line.svelte-431s62.svelte-431s62{text-transform:uppercase;background-color:var(--vtYellow);color:var(--vtWhite);font-family:var(--vtPrimaryFont);font-size:0.9rem;padding-left:9%;margin-top:0%;display:flex;height:30px}.page.svelte-431s62.svelte-431s62{margin:0;padding:0;box-sizing:border-box}a.svelte-431s62.svelte-431s62{text-decoration:none;cursor:pointer;color:var(--vtWhite)}.a.svelte-431s62.svelte-431s62{color:var(--vtDarkBlue)}.img.svelte-431s62.svelte-431s62{width:290px;height:210px}h2.svelte-431s62.svelte-431s62{font-size:1rem;font-family:var(--vtSecondaryFont);line-height:1.5rem;color:var(--vtDarkBlue)}.h1-detail.svelte-431s62.svelte-431s62{padding-left:6.7rem;max-width:30rem;max-height:6rem}.h2-detail.svelte-431s62.svelte-431s62,.bold.svelte-431s62.svelte-431s62{font-size:1rem;font-weight:400;font-family:var(--vtPrimaryFont);color:var(--vtSec-DarkBlue)}.bold.svelte-431s62.svelte-431s62{font-weight:800;text-decoration:underline;text-decoration-thickness:0.2rem;text-underline-offset:0.5rem}.text.svelte-431s62.svelte-431s62,.template-url.svelte-431s62.svelte-431s62{margin-top:3rem}.text.svelte-431s62.svelte-431s62{padding-top:1.5rem;max-width:35rem;font-size:1rem;font-family:var(--vtSecondaryFont);color:var(--vtSec-DarkBlue)}h4.svelte-431s62.svelte-431s62{font-size:1rem;font-family:var(--vtPrimaryFont);line-height:1.5rem;color:var(--vtDarkBlue)}p.svelte-431s62.svelte-431s62{font-size:1rem;font-family:var(--vtSecondaryFont);text-transform:uppercase}.lowercase.svelte-431s62.svelte-431s62{text-transform:none;line-height:1.5rem;max-width:75%}.arrows.svelte-431s62.svelte-431s62{margin-bottom:-7%}.about-text.svelte-431s62.svelte-431s62,.about.svelte-431s62.svelte-431s62{display:grid;justify-items:center}.about.svelte-431s62.svelte-431s62,.about2.svelte-431s62.svelte-431s62{width:60%}.arrows-line.svelte-431s62.svelte-431s62{width:1%;transform:rotate(180deg)}.icon.svelte-431s62.svelte-431s62{width:6.5%;height:94.5%}.columntag.svelte-431s62.svelte-431s62{display:flex;margin-left:-0.8rem}.categorien.svelte-431s62.svelte-431s62{display:flex;flex-direction:column}.categorie.svelte-431s62.svelte-431s62{max-width:100%;display:flex;flex-direction:column;margin:2em 2.05em}.view-method.svelte-431s62.svelte-431s62{display:none}.tekenmethodes-main.svelte-431s62.svelte-431s62{display:flex;align-items:center;justify-content:center;margin:0 auto;margin-left:8em}.intro.svelte-431s62.svelte-431s62{display:grid;grid:". intro ." 1fr / 1fr 5fr 1fr;gap:8px;padding-top:25px;padding-bottom:25px;margin-bottom:75px}.intro-text.svelte-431s62.svelte-431s62{grid-area:intro;min-width:0em}.intro-text.svelte-431s62 h1.svelte-431s62{margin-bottom:20px}.categories.svelte-431s62.svelte-431s62{display:none}li.svelte-431s62 a.svelte-431s62{text-decoration:none;color:var(--vtDarkBlue);font-family:var(--vtPrimaryFont);font-size:16px;padding-left:20px}li.svelte-431s62 a.svelte-431s62:hover{color:var(--vtLightBlue)}li.svelte-431s62 a.svelte-431s62:active{color:var(--vtDarkBlue);font-weight:600}.active.svelte-431s62.svelte-431s62{font-weight:700}.slide.svelte-431s62.svelte-431s62{clear:both;width:100%;height:0px;overflow:hidden;transition:height 0.4s ease}.slide.svelte-431s62 li.svelte-431s62{display:flex;align-items:center;padding:30px}.img-categorie.svelte-431s62.svelte-431s62{float:left;left:10%}.categories-mobile.svelte-431s62.svelte-431s62{width:100%;background:var(--vtGrey);margin:10px auto;margin-bottom:75px}.categories-mobile.svelte-431s62 span.svelte-431s62{padding:30px;background:var(--vtGrey);color:var(--vtDarkBlue);font-size:1.2em;cursor:pointer;display:block;font-family:var(--vtPrimaryFont);font-weight:800;font-size:16px}#touch.svelte-431s62.svelte-431s62{position:absolute;opacity:0;height:auto}#touch.svelte-431s62:checked+.slide.svelte-431s62{height:auto}.methods.svelte-431s62.svelte-431s62{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:center}.method-container.svelte-431s62 img.svelte-431s62{width:300px;border:2px solid;border-color:var(--vtGrey-50)}.methods-titles.svelte-431s62.svelte-431s62{width:90%;margin-top:-0.7em;margin-bottom:1.5em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;hyphens:auto}.methods-titles.svelte-431s62.svelte-431s62:hover{white-space:unset;text-overflow:unset}.detail-main.svelte-431s62.svelte-431s62{margin:2rem 0}.Leren-over-jezelf-en-reflecteren.svelte-431s62.svelte-431s62{border-color:var(--vtSec-DarkBlue) !important}.Leren-over-anderen.svelte-431s62.svelte-431s62{border-color:var(--vtSec-DarkBlue) !important}.Creatief-denken.svelte-431s62.svelte-431s62{border-color:var(--vtSec-DarkBlue) !important}.Organiseren-en-plannen.svelte-431s62.svelte-431s62{border-color:var(--vtSec-DarkBlue) !important}.Communcieren-en-presenteren.svelte-431s62.svelte-431s62{border-color:var(--vtSec-DarkBlue) !important}.Onderzoeken-en-begrijpen.svelte-431s62.svelte-431s62{border-color:var(--vtSec-DarkBlue) !important}@media(min-width: 68em){.line.svelte-431s62.svelte-431s62{padding-left:9% !important}.intro.svelte-431s62.svelte-431s62{display:grid;grid:". intro ." 1fr / 0.75fr 3fr 0.75fr;gap:8px;padding-top:25px;padding-bottom:25px;margin-bottom:75px}.intro-text.svelte-431s62.svelte-431s62{grid-area:intro;display:flex;flex-wrap:wrap;justify-content:center}.intro-text.svelte-431s62 h1.svelte-431s62{font-size:3.157rem;position:relative;justify-content:center}.intro-text.svelte-431s62 p.svelte-431s62{font-size:20px}.categories-mobile.svelte-431s62.svelte-431s62{display:none}.categories.svelte-431s62.svelte-431s62{display:grid !important;grid:". category ." 1fr / 1fr 4fr 1fr;margin-bottom:50px}.categories-container.svelte-431s62.svelte-431s62{grid-area:category}li.svelte-431s62 a.svelte-431s62{text-decoration:none;color:var(--vtDarkBlue);font-family:var(--vtPrimaryFont);font-size:20px !important;padding-left:40px !important}.categorie-names.svelte-431s62 li.svelte-431s62{display:flex;align-items:center;padding-bottom:0px;list-style:none;flex:0 0 calc(33.33% - 60px);margin-bottom:1em}.categorie-names.svelte-431s62.svelte-431s62{display:flex;flex-wrap:wrap}.categorien.svelte-431s62.svelte-431s62{display:grid;grid-template-columns:repeat(3, 1fr);grid-column-gap:8rem;grid-row-gap:3rem;max-width:100%;margin:0 4.1rem;align-items:center}.img-categorie.svelte-431s62.svelte-431s62{float:left;left:10%;margin-top:-1em}.lower.svelte-431s62.svelte-431s62{margin:3em 0}.tekenmethodes-main.svelte-431s62.svelte-431s62{display:grid;grid:". methods ." 1fr / 0.75fr 3fr 0.75fr;grid-auto-flow:dense;margin-bottom:100px}.methods.svelte-431s62.svelte-431s62{grid-area:methods;display:grid;grid-template-columns:repeat(3, minmax(0, 1fr)) !important;grid-gap:25px}.methods.svelte-431s62 img.svelte-431s62{width:100%;height:auto;border:1px solid;border-color:var(--vtGrey-50)}.methods-titles.svelte-431s62 h2.svelte-431s62{font-family:var(--vtPrimaryFont);font-size:24px;color:var(--vtDarkBlue);width:80%}}@media(min-width: 45em){.categorien.svelte-431s62.svelte-431s62{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:5rem;grid-row-gap:2rem;max-width:100%;margin:0 2.05rem}.categorie.svelte-431s62.svelte-431s62{margin:0}.categories.svelte-431s62.svelte-431s62{display:none}li.svelte-431s62 a.svelte-431s62{text-decoration:none;color:var(--vtDarkBlue);font-family:var(--vtPrimaryFont);font-size:18px;padding-left:20px;padding-right:1em;margin-left:-1.5em}.tekenmethodes-main.svelte-431s62.svelte-431s62{display:grid;grid:". methods ." 1fr / 0.5fr 3fr 0.5fr;grid-auto-flow:dense;margin-bottom:100px}.methods.svelte-431s62.svelte-431s62{grid-area:methods;display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));grid-gap:25px}.methods.svelte-431s62 img.svelte-431s62{width:100%;height:auto;border:1px solid;border-color:var(--vtGrey-50)}}@media(min-width: 31em){.view-method.svelte-431s62.svelte-431s62{display:flex;font-weight:bold;flex-direction:column;margin-top:0.83em}.arrow-down.svelte-431s62.svelte-431s62{width:15px;float:right;margin-right:1em;margin-top:-2.2em}h1.svelte-431s62.svelte-431s62{font-size:2.369rem;font-family:var(--vtPrimaryFont);color:var(--vtDarkBlue)}.content.svelte-431s62.svelte-431s62{padding:0 50px}.toggler.svelte-431s62.svelte-431s62{display:none}nav ul.svelte-431s62 li.svelte-431s62{display:inline-block;padding-right:30px;padding-top:5px;color:var(--vtDarkBlue);font:var(--vtMenuFont)}.account.svelte-431s62.svelte-431s62{padding-left:30px;padding-bottom:15px}.tekenmethodes-main.svelte-431s62.svelte-431s62{margin-left:0em}.line.svelte-431s62.svelte-431s62{padding-left:20%}.categories.svelte-431s62.svelte-431s62{display:none}li.svelte-431s62 a.svelte-431s62{text-decoration:none;color:var(--vtDarkBlue);font-family:var(--vtPrimaryFont);font-size:18px;padding-left:20px;padding-right:1em;margin-left:-1.5em}}@media(max-width: 31em){h1.svelte-431s62.svelte-431s62{font-size:1.157rem;font-family:var(--vtPrimaryFont);color:var(--vtDarkBlue)}.arrow-down.svelte-431s62.svelte-431s62{width:15px;float:right;margin-right:1em;margin-top:-2.2em}.line.svelte-431s62.svelte-431s62{padding-left:11%}}',
  map: null
};
const Tekenmethodes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section data-svelte-h="svelte-7z0gkc"><h4 class="line svelte-431s62">Tekenmethodes</h4></section> <section class="intro svelte-431s62" data-svelte-h="svelte-ysegla"><article class="intro-text svelte-431s62"><h1 class="svelte-431s62">Tekenmethodes</h1> <p class="lowercase svelte-431s62">Welkom op onze pagina over Visual Thinking! Visual Thinking is een super
      toffe manier om informatie te begrijpen, te ordenen en te delen met
      anderen door middel van plaatjes in plaats van alleen maar woorden. Dit
      maakt het gemakkelijker om complexe ideeën te begrijpen en te delen met
      anderen. <br> <br>
      Op deze pagina vind je verschillende Visual Thinking tekenmethodes die je kunt
      gebruiken om je creativiteit en productiviteit te vergroten. Of je nu een student
      bent, of gewoon geïnteresseerd bent in Visual Thinking, wij hebben de juiste
      tools en technieken voor jou. <br> <br>
      Hier vind je ook een heleboel tips en trucs voor het gebruik van Visual Thinking
      in je dagelijks leven en je studie. Dus waar wacht je nog op? Ontdek vandaag
      nog de kracht van Visual Thinking en maak je ideeën visueel!</p></article></section> <section class="categories-mobile svelte-431s62" data-svelte-h="svelte-1ujr9dp"><label for="touch"><span id="menu-icon" class="svelte-431s62">Categorieën</span></label> <img src="/arrow-down.svg" alt="" class="arrow-down svelte-431s62"> <input type="checkbox" id="touch" class="svelte-431s62"> <ul class="slide svelte-431s62"><img src="/onderzoeken-en-begrijpen.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch" class="svelte-431s62">Onderzoeken en begrijpen</a></li> <img src="/organiseren-en-plannen.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch" class="svelte-431s62">Organiseren en plannen</a></li> <img src="/leren-over-anderen.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch" class="svelte-431s62">Leren over anderen</a></li> <img src="/leren-over-jezelf.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch" class="svelte-431s62">Leren over jezelf</a></li> <img src="/communiceren.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch" class="svelte-431s62">Communiceren en presenteren</a></li> <img src="/creatief.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch" class="svelte-431s62">Creatief denken</a></li></ul></section> <section class="categories svelte-431s62" data-svelte-h="svelte-1rzq0tk"><section class="categories-container svelte-431s62"><ul class="categorie-names svelte-431s62"><img src="/onderzoeken-en-begrijpen.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm28czo0kny0bw3tl71hnq4#touch" class="svelte-431s62">Onderzoeken en begrijpen</a></li> <img src="/organiseren-en-plannen.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2bwei0ku90bw26jca93on#touch" class="svelte-431s62">Organiseren en plannen</a></li> <img src="/leren-over-anderen.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2cfuj0kt40bw30fo6ow2j#touch" class="svelte-431s62">Leren over anderen</a></li> <img src="/leren-over-jezelf.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm298dc0kpu0bw3weflzwvw#touch" class="svelte-431s62">Leren over jezelf</a></li> <img src="/communiceren.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2c6zs0kst0aw18ja2oafj#touch" class="svelte-431s62">Communiceren en presenteren</a></li> <img src="/creatief.svg" alt="" class="img-categorie svelte-431s62"> <li class="categorie-name svelte-431s62"><a href="?selectedCategoryId=clbm2bnf20kqw0aw159269x9i#touch" class="svelte-431s62">Creatief denken</a></li></ul></section></section> <main class="tekenmethodes-main svelte-431s62"><article class="methods svelte-431s62">${data && data.methods && data.methods.length > 0 ? `${each(data.methods, (method, index) => {
    return `<section class="method-container svelte-431s62"${add_attribute("data-index", index, 0)}><a href="${"/tekenmethodes/" + escape(method.slug, true)}" class="link-detail-page svelte-431s62">${method.template && method.template.url ? `<picture><source type="image/webp"${add_attribute("srcset", method.template.url, 0)} class="${escape(null_to_empty(method.categories[0].title.replaceAll(" ", "-")), true) + " svelte-431s62"}" loading="lazy"> <img${add_attribute("src", method.template.url.replace(":webp", ":png"), 0)}${add_attribute("alt", "Voorbeeld van " + method.title, 0)} class="${escape(null_to_empty(method.categories[0].title.replaceAll(" ", "-")), true) + " svelte-431s62"}" loading="lazy"> </picture>` : `<img class="${escape(null_to_empty(method.categories[0].title.replaceAll(" ", "-")), true) + " svelte-431s62"}" src="/placeholder.webp" alt="Placeholder" loading="lazy">`} <section class="methods-titles svelte-431s62"><h2 class="svelte-431s62">${escape(method.title)}</h2> </section></a> </section>`;
  })}` : ``}</article> </main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(Tekenmethodes, "Tekenmethodes").$$render($$result, { data }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};