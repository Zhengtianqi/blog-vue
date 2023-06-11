import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-0ce632a0.js";const p={},e=t(`<p>​ 视图可以允许保存一个查询（并）像对待表一样对这个查询进行操作。（这是一个逻辑结构，因为它不像一个表会存储数据。</p><h1 id="一、使用视图来降低查询复杂度" tabindex="-1"><a class="header-anchor" href="#一、使用视图来降低查询复杂度" aria-hidden="true">#</a> 一、使用视图来降低查询复杂度</h1><p>​ 当查询长且复杂，通过使用视图将这个查询语句分割成多个小的、更可控的片段可以降低这种复杂度。</p><p>例如：</p><p>改进前：Hive 查询语句中含有多层嵌套</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">FROM</span><span class="token punctuation">(</span>
	<span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> people <span class="token constant">JOIN</span> cart <span class="token constant">ON</span> <span class="token punctuation">(</span>cart<span class="token punctuation">.</span>people_id<span class="token operator">=</span>people<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token class-name">WHERE</span> firstname<span class="token operator">=</span><span class="token char">&#39;john&#39;</span>
<span class="token punctuation">)</span> a <span class="token constant">SELECT</span> a<span class="token punctuation">.</span>lastname <span class="token constant">WHERE</span> a<span class="token punctuation">.</span>id<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>改进后：利用视图进行查询</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">CREATE</span> <span class="token constant">VIEW</span> shorter_join <span class="token constant">AS</span> <span class="token constant">SELECT</span> <span class="token operator">*</span> <span class="token constant">FROM</span> people <span class="token constant">JOIN</span> cart <span class="token constant">ON</span> <span class="token punctuation">(</span>cart<span class="token punctuation">.</span>people_id<span class="token operator">=</span>people<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token class-name">WHERE</span> firstname<span class="token operator">=</span><span class="token char">&#39;john&#39;</span>
<span class="token comment">// 这样就可以像操作表一样来操作这个视图了，简化了查询语句</span>
<span class="token constant">SELECT</span> lastname <span class="token constant">FROM</span> shorter_join <span class="token class-name">WHERE</span> id<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="二、使用视图来限制基于条件过滤的数据" tabindex="-1"><a class="header-anchor" href="#二、使用视图来限制基于条件过滤的数据" aria-hidden="true">#</a> 二、使用视图来限制基于条件过滤的数据</h1><p>​ 基于一个 或者 多个列的值 来限制 输出结果。可以通过创建视图来限制数据访问，可以用来保护信息不被随意查询：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>hive<span class="token operator">&gt;</span> <span class="token constant">CREATE</span> <span class="token class-name">TABLE</span> <span class="token function">userinfo</span><span class="token punctuation">(</span>
	<span class="token operator">&gt;</span> firstname string<span class="token punctuation">,</span> lastname string<span class="token punctuation">,</span> ssn string<span class="token punctuation">,</span> password string<span class="token punctuation">)</span><span class="token punctuation">;</span>

hive<span class="token operator">&gt;</span> <span class="token constant">CREATE</span> <span class="token constant">VIEW</span> safer_user_info <span class="token constant">AS</span>
    <span class="token operator">&gt;</span> <span class="token class-name">SELECT</span> firstname<span class="token punctuation">,</span> lastname <span class="token class-name">FROM</span> userinfo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ Hive目前不支持的功能：有的数据库，允许将视图作为一个安全机制，也就是不给用户直接访问具有敏感数据的原始表，而是提供给用户一个通过WHERE子句限制了的视图，以供访问。Hive中用户必须能够访问整个底层的原始表的权限，视图才能工作。</p><h1 id="三、-动态分区中的视图和-map-类型" tabindex="-1"><a class="header-anchor" href="#三、-动态分区中的视图和-map-类型" aria-hidden="true">#</a> 三、 动态分区中的视图和 map 类型</h1><p>​ Hive 支持 array、map 和 struct 数据类型，这些数据类型在传统的数据库中并不常见，因为他们破坏了第一范式。</p><p>​ Hive 可将一整行文本作为一个 map，加上视图功能，就允许用户可以基于同一个物理表构建多个逻辑表。</p><p>​ 视图如下：三个字段作为key, 视图名为 orders</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">CREATE</span> <span class="token class-name">VIEW</span> <span class="token function">orders</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> city<span class="token punctuation">,</span> part<span class="token punctuation">)</span> <span class="token constant">AS</span> <span class="token constant">SELECT</span> cols<span class="token punctuation">[</span><span class="token string">&quot;state&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cols<span class="token punctuation">[</span><span class="token string">&quot;city&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cols<span class="token punctuation">[</span><span class="token string">&quot;part&quot;</span><span class="token punctuation">]</span>
<span class="token constant">FROM</span> dynamicatable <span class="token constant">WHERE</span> cols<span class="token punctuation">[</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;request&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","HiveQL视图.html.vue"]]);export{d as default};
