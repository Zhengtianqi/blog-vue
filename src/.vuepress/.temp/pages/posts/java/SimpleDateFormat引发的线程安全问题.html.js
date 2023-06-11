export const data = JSON.parse("{\"key\":\"v-22792c59\",\"path\":\"/posts/java/SimpleDateFormat%E5%BC%95%E5%8F%91%E7%9A%84%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98.html\",\"title\":\"SimpleDateFormat引发的线程安全问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SimpleDateFormat引发的线程安全问题\",\"author\":\"郑天祺\",\"tag\":[\"并发\",\"线程安全\"],\"category\":[\"java基础\"],\"date\":\"2019-10-12T18:42:00.000Z\",\"description\":\"一、问题产生 ​\\t在写java程序时，有时间戳转换的操作。 import java.text.ParseException; import java.text.SimpleDateFormat; import java.util.Date; /** * @author zhengtianqi * @date 2019/10/12 */ public class DateTrans { public static void main(String[] args) { // 将2019-10-12 18:50:30 改成 2019年10月12日 String inDate = \\\"2019-10-12 18:50:30\\\"; SimpleDateFormat inPut = new SimpleDateFormat(\\\"yyyy-MM-dd HH:mm:ss\\\"); SimpleDateFormat outPut = new SimpleDateFormat(\\\"yyyy年MM月dd日\\\"); try { Date temp = inPut.parse(inDate); String outDate = outPut.format(temp); System.out.println(outDate); } catch (ParseException e) { System.out.println(\\\"时间转换出错，出错信息为 ={}\\\" + e); } } }\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/blog-vue/posts/java/SimpleDateFormat%E5%BC%95%E5%8F%91%E7%9A%84%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E9%97%AE%E9%A2%98.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SimpleDateFormat引发的线程安全问题\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一、问题产生 ​\\t在写java程序时，有时间戳转换的操作。 import java.text.ParseException; import java.text.SimpleDateFormat; import java.util.Date; /** * @author zhengtianqi * @date 2019/10/12 */ public class DateTrans { public static void main(String[] args) { // 将2019-10-12 18:50:30 改成 2019年10月12日 String inDate = \\\"2019-10-12 18:50:30\\\"; SimpleDateFormat inPut = new SimpleDateFormat(\\\"yyyy-MM-dd HH:mm:ss\\\"); SimpleDateFormat outPut = new SimpleDateFormat(\\\"yyyy年MM月dd日\\\"); try { Date temp = inPut.parse(inDate); String outDate = outPut.format(temp); System.out.println(outDate); } catch (ParseException e) { System.out.println(\\\"时间转换出错，出错信息为 ={}\\\" + e); } } }\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"并发\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"线程安全\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-10-12T18:42:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"SimpleDateFormat引发的线程安全问题\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-10-12T18:42:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-10T12:47:14.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1686401234000,\"updatedTime\":1686401234000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":2.25,\"words\":676},\"filePathRelative\":\"posts/java/SimpleDateFormat引发的线程安全问题.md\",\"localizedDate\":\"2019年10月13日\",\"excerpt\":\"<h1> 一、问题产生</h1>\\n<p>​\\t在写java程序时，有时间戳转换的操作。</p>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code><span class=\\\"token keyword\\\">import</span> <span class=\\\"token import\\\"><span class=\\\"token namespace\\\">java<span class=\\\"token punctuation\\\">.</span>text<span class=\\\"token punctuation\\\">.</span></span><span class=\\\"token class-name\\\">ParseException</span></span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token import\\\"><span class=\\\"token namespace\\\">java<span class=\\\"token punctuation\\\">.</span>text<span class=\\\"token punctuation\\\">.</span></span><span class=\\\"token class-name\\\">SimpleDateFormat</span></span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token keyword\\\">import</span> <span class=\\\"token import\\\"><span class=\\\"token namespace\\\">java<span class=\\\"token punctuation\\\">.</span>util<span class=\\\"token punctuation\\\">.</span></span><span class=\\\"token class-name\\\">Date</span></span><span class=\\\"token punctuation\\\">;</span>\\n\\n<span class=\\\"token doc-comment comment\\\">/**\\n * <span class=\\\"token keyword\\\">@author</span> zhengtianqi\\n * <span class=\\\"token keyword\\\">@date</span> 2019/10/12\\n */</span>\\n<span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">class</span> <span class=\\\"token class-name\\\">DateTrans</span> <span class=\\\"token punctuation\\\">{</span>\\n\\n    <span class=\\\"token keyword\\\">public</span> <span class=\\\"token keyword\\\">static</span> <span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">main</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">String</span><span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span> args<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n\\n        <span class=\\\"token comment\\\">// 将2019-10-12 18:50:30 改成 2019年10月12日</span>\\n        <span class=\\\"token class-name\\\">String</span> inDate <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"2019-10-12 18:50:30\\\"</span><span class=\\\"token punctuation\\\">;</span>\\n\\n        <span class=\\\"token class-name\\\">SimpleDateFormat</span> inPut <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">SimpleDateFormat</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"yyyy-MM-dd HH:mm:ss\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token class-name\\\">SimpleDateFormat</span> outPut <span class=\\\"token operator\\\">=</span> <span class=\\\"token keyword\\\">new</span> <span class=\\\"token class-name\\\">SimpleDateFormat</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"yyyy年MM月dd日\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n        <span class=\\\"token keyword\\\">try</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token class-name\\\">Date</span> temp <span class=\\\"token operator\\\">=</span> inPut<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">parse</span><span class=\\\"token punctuation\\\">(</span>inDate<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n            <span class=\\\"token class-name\\\">String</span> outDate <span class=\\\"token operator\\\">=</span> outPut<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">format</span><span class=\\\"token punctuation\\\">(</span>temp<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n            <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span>outDate<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n        <span class=\\\"token punctuation\\\">}</span> <span class=\\\"token keyword\\\">catch</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token class-name\\\">ParseException</span> e<span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token class-name\\\">System</span><span class=\\\"token punctuation\\\">.</span>out<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">println</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"时间转换出错，出错信息为 ={}\\\"</span> <span class=\\\"token operator\\\">+</span> e<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
