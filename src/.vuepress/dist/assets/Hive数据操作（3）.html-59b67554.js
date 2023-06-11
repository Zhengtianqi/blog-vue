const e=JSON.parse('{"key":"v-6975eb2a","path":"/posts/database/Hive%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%EF%BC%883%EF%BC%89.html","title":"Hive数据操作（3）","lang":"zh-CN","frontmatter":{"title":"Hive数据操作（3）","author":"郑天祺","tag":["hive"],"category":["大数据"],"date":"2020-01-20T14:27:00.000Z","description":"一、类型转换 ​\\t\\t（1）cast() 函数，可以使用这个函数对指定的值进行显式的类型转换。 例如： // 当salary字段的值是不合法的浮点数字符串的话，Hive会返回NULL SELECT name, salary FROM employees WHERE cast(salary AS FLOAT) &lt; 100000.0;","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/database/Hive%E6%95%B0%E6%8D%AE%E6%93%8D%E4%BD%9C%EF%BC%883%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"Hive数据操作（3）"}],["meta",{"property":"og:description","content":"一、类型转换 ​\\t\\t（1）cast() 函数，可以使用这个函数对指定的值进行显式的类型转换。 例如： // 当salary字段的值是不合法的浮点数字符串的话，Hive会返回NULL SELECT name, salary FROM employees WHERE cast(salary AS FLOAT) &lt; 100000.0;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"hive"}],["meta",{"property":"article:published_time","content":"2020-01-20T14:27:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hive数据操作（3）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-20T14:27:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"posts/database/Hive数据操作（3）.md","localizedDate":"2020年1月20日","excerpt":"<h1> 一、类型转换</h1>\\n<p>​\\t\\t（1）cast() 函数，可以使用这个函数对指定的值进行显式的类型转换。</p>\\n<p>例如：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 当salary字段的值是不合法的浮点数字符串的话，Hive会返回NULL</span>\\n<span class=\\"token class-name\\">SELECT</span> name<span class=\\"token punctuation\\">,</span> salary <span class=\\"token constant\\">FROM</span> employees <span class=\\"token class-name\\">WHERE</span> <span class=\\"token function\\">cast</span><span class=\\"token punctuation\\">(</span>salary <span class=\\"token class-name\\">AS</span> <span class=\\"token constant\\">FLOAT</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&lt;</span> <span class=\\"token number\\">100000.0</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
