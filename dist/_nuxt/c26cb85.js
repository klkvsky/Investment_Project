(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{284:function(t,e,r){var content=r(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("71af12b2",content,!0,{sourceMap:!1})},287:function(t,e,r){"use strict";r(284)},288:function(t,e,r){var o=r(24)(!1);o.push([t.i,".card{display:flex;flex-direction:column;justify-content:flex-start;background-color:#fff;border-radius:18px;width:380px;height:590px;margin-bottom:2rem;position:relative;box-shadow:0 8px 24px rgba(149,157,165,.1)}.card,.card:hover{transition:all .3s cubic-bezier(0,0,.5,1)}.card:hover{transform:scale3d(1.01,1.01,1.01);box-shadow:2px 4px 16px rgba(0,0,0,.16)}.card__image{flex:.5;height:250px;margin-bottom:0;padding:.5rem}.card__image img{width:100%;height:calc(250px - .8rem);-o-object-fit:cover;object-fit:cover;border-top-right-radius:10px;border-top-left-radius:10px;transition:all .3s cubic-bezier(0,0,.5,1)}.card__body{padding:.5rem .9rem;flex:1;display:grid;grid-auto-columns:1fr;grid-template-rows:.6fr .2fr 1fr .5fr}.card__body__description{margin-bottom:.4rem;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;grid-gap:.5rem;gap:.5rem}.card__body__description p:empty{display:none;width:0;height:0}.card__body__description p span{background-color:#0f142c;font-weight:400;border-radius:5px;color:#fff;opacity:.8;white-space:nowrap;text-transform:uppercase;font-size:.5rem!important;padding:.3rem}.card__body__tittle{font-size:1.1rem;line-height:1.14286;min-height:2.4rem;font-weight:600;letter-spacing:.007em;margin-bottom:10px}.card__body__text{font-size:14px;line-height:1.23536;font-weight:400!important;letter-spacing:-.022em;margin-top:10px}.card__body__cta{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin:1rem 0}.card__body__cta p{font-weight:600;font-size:1.5rem;color:#0f142c}.card__body__cta__link{border:2px solid #333;width:2.5rem;height:2.5rem;border-radius:100px;padding:.5rem}@media(max-width:767.98px){.card{width:94vw;height:auto}.card__image{height:250px}.card__body{display:flex;flex-direction:column;grid-gap:.5rem;gap:.5rem}.card__body__description{height:auto!important;margin-bottom:0}}",""]),t.exports=o},436:function(t,e,r){"use strict";r.r(e);var o=r(1).default.extend({props:["post"],computed:{tags:function(){return this.$store.state.tags}}}),d=(r(287),r(11)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("NuxtLink",{attrs:{to:t.post.slug}},["Инвестор"==t.post.acf.maincategory[0]?r("div",{staticClass:"card"},[r("div",{staticClass:"card__image"},[r("img",{attrs:{src:t.post.acf.thumbnail,alt:""}})]),t._v(" "),r("div",{staticClass:"card__body"},[r("h2",{staticClass:"card__body__tittle"},[t._v("\n        "+t._s(t.post.title.rendered)+"\n      ")]),t._v(" "),r("div",{staticClass:"card__body__description"},t._l(t.tags,(function(e){return r("p",{key:e.id},[t.post.tags.slice(0,3).includes(e.id)?r("span",[t._v("\n            "+t._s(e.name)+"\n          ")]):t._e()])})),0),t._v(" "),r("div",{staticClass:"card__body__text",domProps:{innerHTML:t._s(t.post.acf.postdescription)}}),t._v(" "),r("div",{staticClass:"card__body__cta"},[r("p",[t._v(t._s(t.post.acf.price)+" ₽")])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports}}]);