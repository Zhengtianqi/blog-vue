const n=JSON.parse('{"key":"v-1ee555de","path":"/posts/java/%E6%8E%92%E5%BA%8F%E4%B9%8B%E6%AF%94%E8%BE%83%E5%99%A8.html","title":"排序之比较器Comparable<T>","lang":"zh-CN","frontmatter":{"title":"排序之比较器Comparable<T>","author":"郑天祺","tag":["java","数据结构",""],"category":["java基础"],"date":"2020-01-02T10:27:00.000Z","description":"一、Comparable比较器的使用 \\tJAVA中可以通过实现 Comparable接口的方式让对象进行排序。使用方法： \\t\\t1、实体继承Comparable \\t\\t2、实现compareTo方法，根据需求进行比较 package com.bjut.fight.utils.comparable; public class Student implements Comparable&lt;Student&gt; { private String name; private int age; public Student(String name, int age) { this.name = name; this.age = age; } @Override public int compareTo(Student o) { // 1表示大于，-1表示小于，0表示等于 return this.age &gt;= o.age ? 1 : -1; } public void print() { System.out.println(this.name + \\",\\" + this.age); } }","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/java/%E6%8E%92%E5%BA%8F%E4%B9%8B%E6%AF%94%E8%BE%83%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"排序之比较器Comparable<T>"}],["meta",{"property":"og:description","content":"一、Comparable比较器的使用 \\tJAVA中可以通过实现 Comparable接口的方式让对象进行排序。使用方法： \\t\\t1、实体继承Comparable \\t\\t2、实现compareTo方法，根据需求进行比较 package com.bjut.fight.utils.comparable; public class Student implements Comparable&lt;Student&gt; { private String name; private int age; public Student(String name, int age) { this.name = name; this.age = age; } @Override public int compareTo(Student o) { // 1表示大于，-1表示小于，0表示等于 return this.age &gt;= o.age ? 1 : -1; } public void print() { System.out.println(this.name + \\",\\" + this.age); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"数据结构"}],["meta",{"property":"article:published_time","content":"2020-01-02T10:27:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"排序之比较器Comparable<T>\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-02T10:27:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"posts/java/排序之比较器.md","localizedDate":"2020年1月2日","excerpt":"<h1> 一、Comparable比较器的使用</h1>\\n<pre><code>\\tJAVA中可以通过实现 Comparable接口的方式让对象进行排序。使用方法：\\n\\n\\t\\t1、实体继承Comparable\\n\\n\\t\\t2、实现compareTo方法，根据需求进行比较\\n</code></pre>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">package</span> <span class=\\"token namespace\\">com<span class=\\"token punctuation\\">.</span>bjut<span class=\\"token punctuation\\">.</span>fight<span class=\\"token punctuation\\">.</span>utils<span class=\\"token punctuation\\">.</span>comparable</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Student</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">Comparable</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Student</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">private</span> <span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Student</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span> name<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> age<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age <span class=\\"token operator\\">=</span> age<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token annotation punctuation\\">@Override</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">compareTo</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Student</span> o<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 1表示大于，-1表示小于，0表示等于</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age <span class=\\"token operator\\">&gt;=</span> o<span class=\\"token punctuation\\">.</span>age <span class=\\"token operator\\">?</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">:</span> <span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">System</span><span class=\\"token punctuation\\">.</span>out<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>name <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\",\\"</span> <span class=\\"token operator\\">+</span> <span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>age<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
