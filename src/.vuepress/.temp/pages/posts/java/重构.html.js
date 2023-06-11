export const data = JSON.parse("{\"key\":\"v-12af33c1\",\"path\":\"/posts/java/%E9%87%8D%E6%9E%84.html\",\"title\":\"重构\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"重构\",\"author\":\"ztq\",\"tag\":[\"重构\"],\"category\":[\"设计模式\"],\"date\":\"2021-04-18T00:07:00.000Z\",\"description\":\"1、什么是重构 ​\\t\\t在百度百科里给出的定义是:在不改变软件系统外部行为的前提下，改善它的内部结构。通过调整程序代码改善软件的质量、性能，使其程序的设计模式和架构更趋合理，提高软件的扩展性和维护性。 ​\\t\\t也许有人会问，为什么不在项目开始时多花些时间把设计做好，而要以后花时间来重构呢？ ​\\t\\t首先要知道一个完美得可以预见未来任何变化的设计，或一个灵活得可以容纳任何扩展的设计是不存在的。系统设计人员对即将着手的项目往往只能从大方向予以把控，而无法知道每个细枝末节。 ​\\t\\t其次永远不变的就是变化，提出需求的用户往往要在软件成型后，才开始\\\"品头论足\\\"，系统设计人员毕竟不是先知先觉的神仙，功能的变化导致设计的调整再所难免。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/blog-vue/posts/java/%E9%87%8D%E6%9E%84.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"重构\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"1、什么是重构 ​\\t\\t在百度百科里给出的定义是:在不改变软件系统外部行为的前提下，改善它的内部结构。通过调整程序代码改善软件的质量、性能，使其程序的设计模式和架构更趋合理，提高软件的扩展性和维护性。 ​\\t\\t也许有人会问，为什么不在项目开始时多花些时间把设计做好，而要以后花时间来重构呢？ ​\\t\\t首先要知道一个完美得可以预见未来任何变化的设计，或一个灵活得可以容纳任何扩展的设计是不存在的。系统设计人员对即将着手的项目往往只能从大方向予以把控，而无法知道每个细枝末节。 ​\\t\\t其次永远不变的就是变化，提出需求的用户往往要在软件成型后，才开始\\\"品头论足\\\"，系统设计人员毕竟不是先知先觉的神仙，功能的变化导致设计的调整再所难免。\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"重构\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-04-18T00:07:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"重构\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2021-04-18T00:07:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-10T12:47:14.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Step1、重构第一步-可靠的测试\",\"slug\":\"step1、重构第一步-可靠的测试\",\"link\":\"#step1、重构第一步-可靠的测试\",\"children\":[]},{\"level\":2,\"title\":\"Step2、重构第二步-分解重组statement 找出代码的逻辑泥团并运用Extract Method\",\"slug\":\"step2、重构第二步-分解重组statement-找出代码的逻辑泥团并运用extract-method\",\"link\":\"#step2、重构第二步-分解重组statement-找出代码的逻辑泥团并运用extract-method\",\"children\":[]},{\"level\":2,\"title\":\"Step3、重构第三步-更改amountFor中的变量名\",\"slug\":\"step3、重构第三步-更改amountfor中的变量名\",\"link\":\"#step3、重构第三步-更改amountfor中的变量名\",\"children\":[]},{\"level\":2,\"title\":\"Step4、重构第四步-搬移金额计算代码\",\"slug\":\"step4、重构第四步-搬移金额计算代码\",\"link\":\"#step4、重构第四步-搬移金额计算代码\",\"children\":[]},{\"level\":2,\"title\":\"Step5、重构第五步-运用Extract Method 参考抽取计算金额，来抽取积分\",\"slug\":\"step5、重构第五步-运用extract-method-参考抽取计算金额-来抽取积分\",\"link\":\"#step5、重构第五步-运用extract-method-参考抽取计算金额-来抽取积分\",\"children\":[]},{\"level\":2,\"title\":\"Step6、重构第六步-去掉临时变量\",\"slug\":\"step6、重构第六步-去掉临时变量\",\"link\":\"#step6、重构第六步-去掉临时变量\",\"children\":[]},{\"level\":2,\"title\":\"Step7、重构第七步-运用多态取代与价格相关的条件逻辑\",\"slug\":\"step7、重构第七步-运用多态取代与价格相关的条件逻辑\",\"link\":\"#step7、重构第七步-运用多态取代与价格相关的条件逻辑\",\"children\":[]},{\"level\":2,\"title\":\"Step8、重构第八步-运用多态取代与价格相关的条件逻辑\",\"slug\":\"step8、重构第八步-运用多态取代与价格相关的条件逻辑\",\"link\":\"#step8、重构第八步-运用多态取代与价格相关的条件逻辑\",\"children\":[]},{\"level\":2,\"title\":\"（1）、什么时候重构\",\"slug\":\"_1-、什么时候重构\",\"link\":\"#_1-、什么时候重构\",\"children\":[]},{\"level\":2,\"title\":\"（2）、什么时候不重构\",\"slug\":\"_2-、什么时候不重构\",\"link\":\"#_2-、什么时候不重构\",\"children\":[]},{\"level\":2,\"title\":\"（1）、改善重复代码\",\"slug\":\"_1-、改善重复代码\",\"link\":\"#_1-、改善重复代码\",\"children\":[]},{\"level\":2,\"title\":\"（2）、改善过长的函数、过大的类、 过长的参数列\",\"slug\":\"_2-、改善过长的函数、过大的类、-过长的参数列\",\"link\":\"#_2-、改善过长的函数、过大的类、-过长的参数列\",\"children\":[]},{\"level\":2,\"title\":\"（3）、发散式变化\",\"slug\":\"_3-、发散式变化\",\"link\":\"#_3-、发散式变化\",\"children\":[]},{\"level\":2,\"title\":\"（4）、霾弹式修改\",\"slug\":\"_4-、霾弹式修改\",\"link\":\"#_4-、霾弹式修改\",\"children\":[]},{\"level\":2,\"title\":\"（5）、 依恋情节\",\"slug\":\"_5-、-依恋情节\",\"link\":\"#_5-、-依恋情节\",\"children\":[]},{\"level\":2,\"title\":\"（6）、数据泥团\",\"slug\":\"_6-、数据泥团\",\"link\":\"#_6-、数据泥团\",\"children\":[]},{\"level\":2,\"title\":\"（7）、基本类型偏执\",\"slug\":\"_7-、基本类型偏执\",\"link\":\"#_7-、基本类型偏执\",\"children\":[]},{\"level\":2,\"title\":\"（8）、Switch惊悚现身\",\"slug\":\"_8-、switch惊悚现身\",\"link\":\"#_8-、switch惊悚现身\",\"children\":[]},{\"level\":2,\"title\":\"（9）、平行继承体系\",\"slug\":\"_9-、平行继承体系\",\"link\":\"#_9-、平行继承体系\",\"children\":[]},{\"level\":2,\"title\":\"（10）、冗赘类\",\"slug\":\"_10-、冗赘类\",\"link\":\"#_10-、冗赘类\",\"children\":[]},{\"level\":2,\"title\":\"（11）、夸夸其谈未来性\",\"slug\":\"_11-、夸夸其谈未来性\",\"link\":\"#_11-、夸夸其谈未来性\",\"children\":[]},{\"level\":2,\"title\":\"（12）、令人迷惑的暂时字段\",\"slug\":\"_12-、令人迷惑的暂时字段\",\"link\":\"#_12-、令人迷惑的暂时字段\",\"children\":[]},{\"level\":2,\"title\":\"（13）、 过度耦合的消息链\",\"slug\":\"_13-、-过度耦合的消息链\",\"link\":\"#_13-、-过度耦合的消息链\",\"children\":[]},{\"level\":2,\"title\":\"（14）、中间人\",\"slug\":\"_14-、中间人\",\"link\":\"#_14-、中间人\",\"children\":[]},{\"level\":2,\"title\":\"（15）、狎昵关系\",\"slug\":\"_15-、狎昵关系\",\"link\":\"#_15-、狎昵关系\",\"children\":[]}],\"git\":{\"createdTime\":1686401234000,\"updatedTime\":1686401234000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":25.58,\"words\":7674},\"filePathRelative\":\"posts/java/重构.md\",\"localizedDate\":\"2021年4月18日\",\"excerpt\":\"<h1> 1、什么是重构</h1>\\n<p>​\\t\\t在百度百科里给出的定义是:在不改变软件系统外部行为的前提下，改善它的内部结构。通过调整程序代码改善软件的质量、性能，使其程序的设计模式和架构更趋合理，提高软件的扩展性和维护性。</p>\\n<p>​\\t\\t也许有人会问，为什么不在项目开始时多花些时间把设计做好，而要以后花时间来重构呢？</p>\\n<p>​\\t\\t首先要知道一个完美得可以预见未来任何变化的设计，或一个灵活得可以容纳任何扩展的设计是不存在的。系统设计人员对即将着手的项目往往只能从大方向予以把控，而无法知道每个细枝末节。</p>\\n<p>​\\t\\t其次永远不变的就是变化，提出需求的用户往往要在软件成型后，才开始\\\"品头论足\\\"，系统设计人员毕竟不是先知先觉的神仙，功能的变化导致设计的调整再所难免。</p>\",\"autoDesc\":true}")
