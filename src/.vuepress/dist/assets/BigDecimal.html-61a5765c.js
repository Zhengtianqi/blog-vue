const e=JSON.parse('{"key":"v-e024eca0","path":"/posts/java/BigDecimal.html","title":"BigDecimal","lang":"zh-CN","frontmatter":{"title":"BigDecimal","author":"ztq","tag":["BigDecimal"],"category":["java基础"],"date":"2022-12-07T15:19:00.000Z","description":"1、介绍 Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数，但在实际应用中，可能需要对更大或者更小的数进行运算和处理。 一般情况下，对于那些不需要准确计算精度的数字，我们可以直接使用Float和Double处理，但是Double.valueOf(String) 和Float.valueOf(String)会丢失精度。所以开发中，如果我们需要精确计算的结果，则必须使用BigDecimal类来操作。 BigDecimal所创建的是对象，故我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象。","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/java/BigDecimal.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"BigDecimal"}],["meta",{"property":"og:description","content":"1、介绍 Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数，但在实际应用中，可能需要对更大或者更小的数进行运算和处理。 一般情况下，对于那些不需要准确计算精度的数字，我们可以直接使用Float和Double处理，但是Double.valueOf(String) 和Float.valueOf(String)会丢失精度。所以开发中，如果我们需要精确计算的结果，则必须使用BigDecimal类来操作。 BigDecimal所创建的是对象，故我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"ztq"}],["meta",{"property":"article:tag","content":"BigDecimal"}],["meta",{"property":"article:published_time","content":"2022-12-07T15:19:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"BigDecimal\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-07T15:19:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ztq\\"}]}"]]},"headers":[],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":4.97,"words":1491},"filePathRelative":"posts/java/BigDecimal.md","localizedDate":"2022年12月7日","excerpt":"<h1> 1、介绍</h1>\\n<p>Java在java.math包中提供的API类BigDecimal，用来对超过16位有效位的数进行精确的运算。双精度浮点型变量double可以处理16位有效数，但在实际应用中，可能需要对更大或者更小的数进行运算和处理。\\n一般情况下，对于那些不需要准确计算精度的数字，我们可以直接使用Float和Double处理，但是Double.valueOf(String) 和Float.valueOf(String)会丢失精度。所以开发中，如果我们需要精确计算的结果，则必须使用BigDecimal类来操作。\\nBigDecimal所创建的是对象，故我们不能使用传统的+、-、*、/等算术运算符直接对其对象进行数学运算，而必须调用其相对应的方法。方法中的参数也必须是BigDecimal的对象。构造器是类的特殊方法，专门用来创建对象，特别是带有参数的对象。</p>","autoDesc":true}');export{e as data};