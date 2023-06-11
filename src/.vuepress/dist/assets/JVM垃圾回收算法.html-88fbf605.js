const t=JSON.parse('{"key":"v-462bb9bf","path":"/posts/java/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html","title":"JVM垃圾回收算法","lang":"zh-CN","frontmatter":{"title":"JVM垃圾回收算法","author":"郑天祺","tag":["JVM"],"category":["面试"],"date":"2020-09-18T09:18:00.000Z","description":"1、标记 - 清除 算法 ​\\t标记无用对象，然后进行清除回收。 ​\\t缺点：效率不高，无法清除垃圾碎片。 image-20200918092639589 2、复制 - 清除 算法 ​\\t按照容量划分二个大小相等的内存区域，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/java/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6%E7%AE%97%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"JVM垃圾回收算法"}],["meta",{"property":"og:description","content":"1、标记 - 清除 算法 ​\\t标记无用对象，然后进行清除回收。 ​\\t缺点：效率不高，无法清除垃圾碎片。 image-20200918092639589 2、复制 - 清除 算法 ​\\t按照容量划分二个大小相等的内存区域，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2020-09-18T09:18:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM垃圾回收算法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-09-18T09:18:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.31,"words":394},"filePathRelative":"posts/java/JVM垃圾回收算法.md","localizedDate":"2020年9月18日","excerpt":"<h1> 1、标记 - 清除 算法</h1>\\n<p>​\\t标记无用对象，然后进行清除回收。</p>\\n<p>​\\t缺点：效率不高，无法清除垃圾碎片。</p>\\n<figure><img src=\\"/assets/images/jvm1.png\\" alt=\\"image-20200918092639589\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20200918092639589</figcaption></figure>\\n<h1> 2、复制 - 清除 算法</h1>\\n<p>​\\t按照容量划分二个大小相等的内存区域，每次使用其中的一块。当这一块的内存使用完后，就将还存活的对象复制到另一块去，然后再把使用的空间一次清理掉。这样就使每次的内存回收都是对内存区间的一半进行回收。</p>","autoDesc":true}');export{t as data};
