export const data = JSON.parse("{\"key\":\"v-2f5cfd06\",\"path\":\"/posts/java/%E8%BD%BB%E9%87%8F%E7%BA%A7%E9%94%81.html\",\"title\":\"轻量级锁\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"轻量级锁\",\"author\":\"郑天祺\",\"tag\":[\"锁\"],\"category\":[\"java基础\"],\"date\":\"2019-08-31T15:08:00.000Z\",\"description\":\"1、轻量级锁 锁撤销升级为轻量级锁之后，那么对象的Markword也会进行相应的的变化。 ​ 下面先简单描述下锁撤销之后，升级为轻量级锁的过程： ​ a) 线程在自己的栈桢中创建锁记录 LockRecord。 ​ b) 将锁对象的对象头中的MarkWord复制到线程的刚刚创建的锁记录中。 ​ c) 将锁记录中的Owner指针指向锁对象。 ​ d) 将锁对象的对象头的MarkWord替换为指向锁记录的指针。 2、锁消除 由于偏向锁失效了，那么接下来就得把该锁撤销，锁撤销的开销花费还是挺大的，其大概的过程如下：\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/blog-vue/posts/java/%E8%BD%BB%E9%87%8F%E7%BA%A7%E9%94%81.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"轻量级锁\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1、轻量级锁 锁撤销升级为轻量级锁之后，那么对象的Markword也会进行相应的的变化。 ​ 下面先简单描述下锁撤销之后，升级为轻量级锁的过程： ​ a) 线程在自己的栈桢中创建锁记录 LockRecord。 ​ b) 将锁对象的对象头中的MarkWord复制到线程的刚刚创建的锁记录中。 ​ c) 将锁记录中的Owner指针指向锁对象。 ​ d) 将锁对象的对象头的MarkWord替换为指向锁记录的指针。 2、锁消除 由于偏向锁失效了，那么接下来就得把该锁撤销，锁撤销的开销花费还是挺大的，其大概的过程如下：\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"锁\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-08-31T15:08:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"轻量级锁\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-08-31T15:08:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-10T12:47:14.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1、轻量级锁\",\"slug\":\"_1、轻量级锁\",\"link\":\"#_1、轻量级锁\",\"children\":[]},{\"level\":2,\"title\":\"2、锁消除\",\"slug\":\"_2、锁消除\",\"link\":\"#_2、锁消除\",\"children\":[]},{\"level\":2,\"title\":\"3、锁膨胀\",\"slug\":\"_3、锁膨胀\",\"link\":\"#_3、锁膨胀\",\"children\":[]}],\"git\":{\"createdTime\":1686401234000,\"updatedTime\":1686401234000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":1.31,\"words\":393},\"filePathRelative\":\"posts/java/轻量级锁.md\",\"localizedDate\":\"2019年8月31日\",\"excerpt\":\"<h2> 1、轻量级锁</h2>\\n<p>锁撤销升级为轻量级锁之后，那么对象的Markword也会进行相应的的变化。</p>\\n<p>​    下面先简单描述下锁撤销之后，升级为轻量级锁的过程：</p>\\n<p>​    a) 线程在自己的栈桢中创建锁记录 LockRecord。\\n​     b) 将锁对象的对象头中的MarkWord复制到线程的刚刚创建的锁记录中。\\n​     c) 将锁记录中的Owner指针指向锁对象。\\n​     d) 将锁对象的对象头的MarkWord替换为指向锁记录的指针。</p>\\n<h2> 2、锁消除</h2>\\n<p>由于偏向锁失效了，那么接下来就得把该锁撤销，锁撤销的开销花费还是挺大的，其大概的过程如下：</p>\",\"autoDesc\":true}")
