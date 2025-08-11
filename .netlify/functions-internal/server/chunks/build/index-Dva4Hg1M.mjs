import { _ as __nuxt_component_0 } from './nuxt-link-AawZOQhk.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { a as allArticlesQuery } from './queries-DpV5A1X5.mjs';
import { _ as _export_sfc, a as useAsyncQuery } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'graphql-tag';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import 'ts-invariant';
import 'zen-observable-ts';
import 'graphql';
import '@wry/caches';
import '@vue/apollo-option';
import 'perfect-debounce';
import 'optimism';
import '@wry/equality';
import '@wry/trie';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const articles = ref([]);
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(allArticlesQuery)), __temp = await __temp, __restore(), __temp);
    if (data.value?.articles) {
      articles.value = data.value.articles;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home container" }, _attrs))} data-v-8bc303e4><h1 class="headline" data-v-8bc303e4>Lyric Blog</h1><div class="groups-list" data-v-8bc303e4><!--[-->`);
      ssrRenderList(unref(articles), (article) => {
        _push(`<div class="group" data-v-8bc303e4>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "group__header",
          to: { path: article.slug, query: { documentId: article.documentId } }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h3 class="group__title" data-v-8bc303e4${_scopeId}>${ssrInterpolate(article.title)}</h3><span class="group__subtitle" data-v-8bc303e4${_scopeId}>${ssrInterpolate(article.date)}</span>`);
            } else {
              return [
                createVNode("h3", { class: "group__title" }, toDisplayString(article.title), 1),
                createVNode("span", { class: "group__subtitle" }, toDisplayString(article.date), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="group__text" data-v-8bc303e4>${ssrInterpolate(article.description)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8bc303e4"]]);

export { index as default };
//# sourceMappingURL=index-Dva4Hg1M.mjs.map
