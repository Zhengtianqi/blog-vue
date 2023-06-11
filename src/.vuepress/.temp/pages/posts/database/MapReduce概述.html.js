export const data = JSON.parse("{\"key\":\"v-7eedf06f\",\"path\":\"/posts/database/MapReduce%E6%A6%82%E8%BF%B0.html\",\"title\":\"MapReduce概述\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MapReduce概述\",\"author\":\"郑天祺\",\"tag\":[\"HADOOP\"],\"category\":[\"大数据\"],\"date\":\"2019-12-16T17:13:00.000Z\",\"description\":\"一、基本模型 ​\\tMapReduce采取了分而治之的基本思想，将一个大的作业分解成若干小的任务，提交给集群的多台计算机处理，这样就大大提高了完成作业的效率。 ​\\t在Hadoop平台上，MapReduce框架负责处理并行编程中分布式存储、工作调度、负载均衡、容错及网络通信等复杂工作，把处理过程高度抽象为两个函数：Map 和 Reduce。 ​\\tMap负责把作业分解成多个任务，Reduce负责把分解后多任务处理的结果汇总起来。 其中： ​\\t执行MapReduce作业的机器角色由两个：JobTracker 和 TaskTracker\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/blog-vue/posts/database/MapReduce%E6%A6%82%E8%BF%B0.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MapReduce概述\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一、基本模型 ​\\tMapReduce采取了分而治之的基本思想，将一个大的作业分解成若干小的任务，提交给集群的多台计算机处理，这样就大大提高了完成作业的效率。 ​\\t在Hadoop平台上，MapReduce框架负责处理并行编程中分布式存储、工作调度、负载均衡、容错及网络通信等复杂工作，把处理过程高度抽象为两个函数：Map 和 Reduce。 ​\\tMap负责把作业分解成多个任务，Reduce负责把分解后多任务处理的结果汇总起来。 其中： ​\\t执行MapReduce作业的机器角色由两个：JobTracker 和 TaskTracker\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"郑天祺\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"HADOOP\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-12-16T17:13:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"MapReduce概述\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2019-12-16T17:13:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-10T12:47:14.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"郑天祺\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"（1）拆分输入数据\",\"slug\":\"_1-拆分输入数据\",\"link\":\"#_1-拆分输入数据\",\"children\":[]},{\"level\":2,\"title\":\"（2）执行Map方法\",\"slug\":\"_2-执行map方法\",\"link\":\"#_2-执行map方法\",\"children\":[]},{\"level\":2,\"title\":\"（3）排序与合并处理\",\"slug\":\"_3-排序与合并处理\",\"link\":\"#_3-排序与合并处理\",\"children\":[]},{\"level\":2,\"title\":\"（4）Reduce 阶段的排序与合并\",\"slug\":\"_4-reduce-阶段的排序与合并\",\"link\":\"#_4-reduce-阶段的排序与合并\",\"children\":[{\"level\":3,\"title\":\"（A）Map\",\"slug\":\"a-map\",\"link\":\"#a-map\",\"children\":[]},{\"level\":3,\"title\":\"（B）Reduce\",\"slug\":\"b-reduce\",\"link\":\"#b-reduce\",\"children\":[]}]}],\"git\":{\"createdTime\":1686401234000,\"updatedTime\":1686401234000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":3.37,\"words\":1011},\"filePathRelative\":\"posts/database/MapReduce概述.md\",\"localizedDate\":\"2019年12月17日\",\"excerpt\":\"<h1> 一、基本模型</h1>\\n<p>​\\tMapReduce采取了分而治之的基本思想，将一个大的作业分解成若干小的任务，提交给集群的多台计算机处理，这样就大大提高了完成作业的效率。</p>\\n<p>​\\t在Hadoop平台上，MapReduce框架负责处理并行编程中分布式存储、工作调度、负载均衡、容错及网络通信等复杂工作，把处理过程高度抽象为两个函数：Map 和 Reduce。</p>\\n<p>​\\tMap负责把作业分解成多个任务，Reduce负责把分解后多任务处理的结果汇总起来。</p>\\n<p>其中：</p>\\n<p>​\\t执行MapReduce作业的机器角色由两个：JobTracker 和 TaskTracker</p>\",\"autoDesc\":true}")
