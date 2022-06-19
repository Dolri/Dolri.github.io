import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.3290c909.js";const p={},e=t(`<h1 id="\u6BD4typeof\u8FD0\u7B97\u7B26\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u6BD4typeof\u8FD0\u7B97\u7B26\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a> \u6BD4typeof\u8FD0\u7B97\u7B26\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5224\u65AD</h1><p>\u4E0D\u540C\u6570\u636E\u7C7B\u578B\u7684<code>Object.prototype.toString</code>\u65B9\u6CD5\u8FD4\u56DE\u503C\u5982\u4E0B\u3002</p><ul><li>\u6570\u503C\uFF1A\u8FD4\u56DE<code>[object Number]</code>\u3002</li><li>\u5B57\u7B26\u4E32\uFF1A\u8FD4\u56DE<code>[object String]</code>\u3002</li><li>\u5E03\u5C14\u503C\uFF1A\u8FD4\u56DE<code>[object Boolean]</code>\u3002</li><li>undefined\uFF1A\u8FD4\u56DE<code>[object Undefined]</code>\u3002</li><li>null\uFF1A\u8FD4\u56DE<code>[object Null]</code>\u3002</li><li>\u6570\u7EC4\uFF1A\u8FD4\u56DE<code>[object Array]</code>\u3002</li><li>arguments \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Arguments]</code>\u3002</li><li>\u51FD\u6570\uFF1A\u8FD4\u56DE<code>[object Function]</code>\u3002</li><li>Error \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Error]</code>\u3002</li><li>Date \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Date]</code>\u3002</li><li>RegExp \u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object RegExp]</code>\u3002</li><li>\u5176\u4ED6\u5BF9\u8C61\uFF1A\u8FD4\u56DE<code>[object Object]</code>\u3002</li></ul><p>\u8FD9\u5C31\u662F\u8BF4\uFF0C<code>Object.prototype.toString</code>\u53EF\u4EE5\u770B\u51FA\u4E00\u4E2A\u503C\u5230\u5E95\u662F\u4EC0\u4E48\u7C7B\u578B\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Number]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object String]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Boolean]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Undefined]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Null]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>Math<span class="token punctuation">)</span> <span class="token comment">// &quot;[object Math]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Object]&quot;</span>
<span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[object Array]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528\u8FD9\u4E2A\u7279\u6027\uFF0C\u53EF\u4EE5\u5199\u51FA\u4E00\u4E2A\u6BD4<code>typeof</code>\u8FD0\u7B97\u7B26\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5224\u65AD\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;object&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;array&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;null&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;undefined&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abcd</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;regex&quot;</span>
<span class="token function">type</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;date&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u8FD9\u4E2A<code>type</code>\u51FD\u6570\u7684\u57FA\u7840\u4E0A\uFF0C\u8FD8\u53EF\u4EE5\u52A0\u4E0A\u4E13\u95E8\u5224\u65AD\u67D0\u79CD\u7C7B\u578B\u6570\u636E\u7684\u65B9\u6CD5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">type</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\[object (.*?)\\]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">[</span><span class="token string">&#39;Null&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Undefined&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Object&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Array&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Number&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Boolean&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;Function&#39;</span><span class="token punctuation">,</span>
 <span class="token string">&#39;RegExp&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  type<span class="token punctuation">[</span><span class="token string">&#39;is&#39;</span> <span class="token operator">+</span> t<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">type</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">===</span> t<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
type<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
type<span class="token punctuation">.</span><span class="token function">isRegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">abc</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,u){return s(),a("div",null,o)}var r=n(p,[["render",c],["__file","\u6BD4typeof\u8FD0\u7B97\u7B26\u66F4\u51C6\u786E\u7684\u7C7B\u578B\u5224\u65AD.html.vue"]]);export{r as default};
