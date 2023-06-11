const t=JSON.parse('{"key":"v-aef92024","path":"/posts/java/%E9%87%8D%E6%94%BE%E6%94%BB%E5%87%BB.html","title":"重放攻击","lang":"zh-CN","frontmatter":{"title":"重放攻击","author":"郑天祺","tag":["网络安全","可信"],"category":["可信"],"date":"2019-09-04T19:54:00.000Z","description":"1、概念 ​\\t重放攻击(Replay Attacks)又称重播攻击、回放攻击，是指攻击者发送一个目的主机已接收过的包，来达到欺骗系统的目的，主要用于身份认证过程，破坏认证的正确性。 ​\\t重放攻击可以由发起者，也可以由拦截并重发该数据的敌方进行。攻击者利用网络监听或者其他方式盗取认证凭据，之后再把它重新发给认证服务器。 ​\\t重放攻击在任何网络通过程中都可能发生，是计算机世界黑客常用的攻击方式之一。 （来自百度百科） 2、来源 一个存在安全漏洞的登录系统： 前端web页面用户输入账号、密码，点击登录。 请求提交之前，web端首先通过客户端脚本如javascript对密码原文进行md5加密。 提交账号、md5之后的密码 请求提交至后端，验证账号与密码是否与数据库中的一致，一致则认为登录成功，反之失败。","head":[["meta",{"property":"og:url","content":"https://zhengtianqi.gitee.io/blog-vue/posts/java/%E9%87%8D%E6%94%BE%E6%94%BB%E5%87%BB.html"}],["meta",{"property":"og:site_name","content":"郑天祺的博客"}],["meta",{"property":"og:title","content":"重放攻击"}],["meta",{"property":"og:description","content":"1、概念 ​\\t重放攻击(Replay Attacks)又称重播攻击、回放攻击，是指攻击者发送一个目的主机已接收过的包，来达到欺骗系统的目的，主要用于身份认证过程，破坏认证的正确性。 ​\\t重放攻击可以由发起者，也可以由拦截并重发该数据的敌方进行。攻击者利用网络监听或者其他方式盗取认证凭据，之后再把它重新发给认证服务器。 ​\\t重放攻击在任何网络通过程中都可能发生，是计算机世界黑客常用的攻击方式之一。 （来自百度百科） 2、来源 一个存在安全漏洞的登录系统： 前端web页面用户输入账号、密码，点击登录。 请求提交之前，web端首先通过客户端脚本如javascript对密码原文进行md5加密。 提交账号、md5之后的密码 请求提交至后端，验证账号与密码是否与数据库中的一致，一致则认为登录成功，反之失败。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-10T12:47:14.000Z"}],["meta",{"property":"article:author","content":"郑天祺"}],["meta",{"property":"article:tag","content":"网络安全"}],["meta",{"property":"article:tag","content":"可信"}],["meta",{"property":"article:published_time","content":"2019-09-04T19:54:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-10T12:47:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"重放攻击\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-04T19:54:00.000Z\\",\\"dateModified\\":\\"2023-06-10T12:47:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"郑天祺\\"}]}"]]},"headers":[],"git":{"createdTime":1686401234000,"updatedTime":1686401234000,"contributors":[{"name":"zhengtianqi","email":"270490096@qq.com","commits":1}]},"readingTime":{"minutes":2.53,"words":758},"filePathRelative":"posts/java/重放攻击.md","localizedDate":"2019年9月5日","excerpt":"<h1> 1、概念</h1>\\n<p>​\\t重放攻击(Replay Attacks)又称重播攻击、回放攻击，是指攻击者发送一个目的主机已接收过的包，来达到欺骗系统的目的，主要用于身份认证过程，破坏认证的正确性。</p>\\n<p>​\\t重放攻击可以由发起者，也可以由拦截并重发该数据的敌方进行。攻击者利用网络监听或者其他方式盗取认证凭据，之后再把它重新发给认证服务器。</p>\\n<p>​\\t重放攻击在任何网络通过程中都可能发生，是计算机世界黑客常用的攻击方式之一。</p>\\n<p>（来自百度百科）</p>\\n<h1> 2、来源</h1>\\n<p>一个存在安全漏洞的登录系统：</p>\\n<ol>\\n<li>\\n<p>前端web页面用户输入账号、密码，点击登录。</p>\\n</li>\\n<li>\\n<p>请求提交之前，web端首先通过客户端脚本如javascript对密码原文进行md5加密。</p>\\n</li>\\n<li>\\n<p>提交账号、md5之后的密码</p>\\n</li>\\n<li>\\n<p>请求提交至后端，验证账号与密码是否与数据库中的一致，一致则认为登录成功，反之失败。</p>\\n</li>\\n</ol>","autoDesc":true}');export{t as data};
