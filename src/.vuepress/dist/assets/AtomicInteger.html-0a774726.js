const e=JSON.parse('{"key":"v-377c8284","path":"/posts/java/AtomicInteger.html","title":"AtomicInteger","lang":"zh-CN","frontmatter":{"title":"AtomicInteger","author":"郑天祺","tag":["java基础"],"category":["面试"],"date":"2020-07-24T15:52:00.000Z","description":"1、介绍 AtomicInteger属于JUC并发包下的原子类，继承关系如下： public class AtomicInteger extends Number implements java.io.Serializable","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/java/AtomicInteger.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"AtomicInteger"}],["meta",{"property":"og:description","content":"1、介绍 AtomicInteger属于JUC并发包下的原子类，继承关系如下： public class AtomicInteger extends Number implements java.io.Serializable"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"java基础"}],["meta",{"property":"article:published_time","content":"2020-07-24T15:52:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"AtomicInteger\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-24T15:52:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[{"level":2,"title":"（1）、源码分析","slug":"_1-、源码分析","link":"#_1-、源码分析","children":[{"level":3,"title":"（1）U","slug":"_1-u","link":"#_1-u","children":[]},{"level":3,"title":"（2）VALUE","slug":"_2-value","link":"#_2-value","children":[]}]},{"level":2,"title":"（2）、源码注释","slug":"_2-、源码注释","link":"#_2-、源码注释","children":[]}],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":6.23,"words":1870},"filePathRelative":"posts/java/AtomicInteger.md","localizedDate":"2020年7月24日","excerpt":"<h1> 1、介绍</h1>\\n<p>AtomicInteger属于JUC并发包下的原子类，继承关系如下：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">AtomicInteger</span> <span class=\\"token keyword\\">extends</span> <span class=\\"token class-name\\">Number</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\"><span class=\\"token namespace\\">java<span class=\\"token punctuation\\">.</span>io<span class=\\"token punctuation\\">.</span></span>Serializable</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
