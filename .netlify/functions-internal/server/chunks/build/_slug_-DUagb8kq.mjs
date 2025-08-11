import { _ as __nuxt_component_0 } from './nuxt-link-AawZOQhk.mjs';
import { defineComponent, ref, withAsyncContext, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { s as singleArticleQuery } from './queries-DpV5A1X5.mjs';
import { _ as _export_sfc, b as useRoute, a as useAsyncQuery } from './server.mjs';
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
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const article = ref(null);
    const route = useRoute();
    const variables = {
      id: route.query.documentId
    };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(
      singleArticleQuery,
      variables
    )), __temp = await __temp, __restore(), __temp);
    if (data.value?.article) {
      article.value = data.value.article;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(article)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "home container" }, _attrs))} data-v-07254810><h1 class="headline" data-v-07254810>${ssrInterpolate(unref(article)?.title)}</h1><p class="subtitle" data-v-07254810>${ssrInterpolate(unref(article)?.description)}</p><div class="sections" data-v-07254810><div class="groups-list" data-v-07254810><!--[-->`);
        ssrRenderList(unref(article).body, (paragraph, pIndex) => {
          _push(`<p class="article-paragraph" data-v-07254810>${ssrInterpolate(paragraph.children.map((child) => child.text).join(""))}</p>`);
        });
        _push(`<!--]--></div></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "back"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Back`);
            } else {
              return [
                createTextVNode("Back")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-07254810>Загрузка...</div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07254810"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-DUagb8kq.mjs.map
