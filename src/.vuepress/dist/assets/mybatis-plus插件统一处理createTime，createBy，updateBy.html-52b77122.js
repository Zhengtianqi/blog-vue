const e=JSON.parse('{"key":"v-0e578957","path":"/posts/database/mybatis-plus%E6%8F%92%E4%BB%B6%E7%BB%9F%E4%B8%80%E5%A4%84%E7%90%86createTime%EF%BC%8CcreateBy%EF%BC%8CupdateBy.html","title":"mybatis-plus插件统一处理createTime，createBy，updateBy","lang":"zh-CN","frontmatter":{"title":"mybatis-plus插件统一处理createTime，createBy，updateBy","author":"ztq","tag":["mybatis"],"category":["数据库"],"date":"2023-04-17T09:28:00.000Z","description":"一、添加注解 先添加注解，有四种方式： public enum FieldFill { DEFAULT, INSERT, UPDATE, INSERT_UPDATE; }","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/database/mybatis-plus%E6%8F%92%E4%BB%B6%E7%BB%9F%E4%B8%80%E5%A4%84%E7%90%86createTime%EF%BC%8CcreateBy%EF%BC%8CupdateBy.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"mybatis-plus插件统一处理createTime，createBy，updateBy"}],["meta",{"property":"og:description","content":"一、添加注解 先添加注解，有四种方式： public enum FieldFill { DEFAULT, INSERT, UPDATE, INSERT_UPDATE; }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"mybatis"}],["meta",{"property":"article:published_time","content":"2023-04-17T09:28:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mybatis-plus插件统一处理createTime，createBy，updateBy\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-04-17T09:28:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.29,"words":386},"filePathRelative":"posts/database/mybatis-plus插件统一处理createTime，createBy，updateBy.md","localizedDate":"2023年4月17日","excerpt":"<p>一、添加注解\\n先添加注解，有四种方式：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">enum</span> <span class=\\"token class-name\\">FieldFill</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token constant\\">DEFAULT</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token constant\\">INSERT</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token constant\\">UPDATE</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token constant\\">INSERT_UPDATE</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
