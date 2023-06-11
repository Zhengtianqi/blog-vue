export const data = JSON.parse("{\"key\":\"v-fa81f68e\",\"path\":\"/posts/java/Disruptor.html\",\"title\":\"Disruptor\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Disruptor\",\"author\":\"ztq\",\"tag\":[\"Disruptor\"],\"category\":[\"分布式\"],\"date\":\"2021-04-13T14:17:00.000Z\",\"description\":\"disruptor ------高性能的线程间消息传递框架 介绍： Disruptor类似于java的BlockingQueue。与队列一样，Disruptor的目的是在同一进程内的线程之间传递数据。 但是，Disruptor提供了与队列不同的关键功能： 1、同一个“事件”可以有多个消费者，消费者之间既可以并行处理，也可以相互依赖形成处理的先后次序(形成一个依赖图)\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/blog-vue/posts/java/Disruptor.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Disruptor\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"disruptor ------高性能的线程间消息传递框架 介绍： Disruptor类似于java的BlockingQueue。与队列一样，Disruptor的目的是在同一进程内的线程之间传递数据。 但是，Disruptor提供了与队列不同的关键功能： 1、同一个“事件”可以有多个消费者，消费者之间既可以并行处理，也可以相互依赖形成处理的先后次序(形成一个依赖图)\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Disruptor\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-04-13T14:17:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Disruptor\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-04-13T14:17:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-10T12:47:14.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"介绍：\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]},{\"level\":2,\"title\":\"类图：\",\"slug\":\"类图\",\"link\":\"#类图\",\"children\":[]},{\"level\":2,\"title\":\"核心概念：\",\"slug\":\"核心概念\",\"link\":\"#核心概念\",\"children\":[]},{\"level\":2,\"title\":\"DSL图：\",\"slug\":\"dsl图\",\"link\":\"#dsl图\",\"children\":[]},{\"level\":2,\"title\":\"RingBuffer实现：\",\"slug\":\"ringbuffer实现\",\"link\":\"#ringbuffer实现\",\"children\":[]},{\"level\":2,\"title\":\"这样做有助于平缓延迟的峰值？\",\"slug\":\"这样做有助于平缓延迟的峰值\",\"link\":\"#这样做有助于平缓延迟的峰值\",\"children\":[]},{\"level\":2,\"title\":\"生产者写入数据：\",\"slug\":\"生产者写入数据\",\"link\":\"#生产者写入数据\",\"children\":[]},{\"level\":2,\"title\":\"申请下一个节点：\",\"slug\":\"申请下一个节点\",\"link\":\"#申请下一个节点\",\"children\":[]},{\"level\":2,\"title\":\"提交新的数据：\",\"slug\":\"提交新的数据\",\"link\":\"#提交新的数据\",\"children\":[]},{\"level\":2,\"title\":\"ProducerBarrier上的批处理\",\"slug\":\"producerbarrier上的批处理\",\"link\":\"#producerbarrier上的批处理\",\"children\":[]},{\"level\":2,\"title\":\"多个生产者的场景\",\"slug\":\"多个生产者的场景\",\"link\":\"#多个生产者的场景\",\"children\":[]}],\"git\":{\"createdTime\":1686401234000,\"updatedTime\":1686401234000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":9.4,\"words\":2820},\"filePathRelative\":\"posts/java/Disruptor.md\",\"localizedDate\":\"2021年4月13日\",\"excerpt\":\"<h1> <a href=\\\"https://github.com/LMAX-Exchange/disruptor\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">disruptor</a></h1>\\n<p>------高性能的线程间消息传递框架</p>\\n<h2> 介绍：</h2>\\n<p>Disruptor类似于java的BlockingQueue。与队列一样，Disruptor的目的是在同一进程内的线程之间传递数据。</p>\\n<p>但是，Disruptor提供了与队列不同的关键功能：</p>\\n<p>1、同一个“事件”可以有多个消费者，消费者之间既可以并行处理，也可以相互依赖形成处理的先后次序(形成一个依赖图)</p>\",\"autoDesc\":true}")