export const data = JSON.parse("{\"key\":\"v-5a6aceaf\",\"path\":\"/posts/DevOps/docker%E9%95%9C%E5%83%8F%E9%83%A8%E7%BD%B2%E5%88%B0k8s%E9%9B%86%E7%BE%A4.html\",\"title\":\"docker镜像部署到k8s集群\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"docker镜像部署到k8s集群\",\"author\":\"ztq\",\"tag\":[\"k8s\",\"docker\"],\"category\":[\"CICD\"],\"date\":\"2022-04-11T21:20:00.000Z\",\"description\":\"一、搭建docker私有仓库 本文使用阿里云私有仓库（个人免费版），阿里云---&gt;容器镜像服务 image-20220411212506831 二、docker打包 1、程序目录 ll -rw-r--r-- 1 root root 872 4月 11 22:03 dockerfile -rw-r--r-- 1 root root 8678 4月 11 21:53 jdk-8u251-linux-x64.tar.gz -rw-r--r-- 1 root root 75306958 4月 11 21:47 ruoyi.jar\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://zhengtianqi.gitee.io/blog-vue/posts/DevOps/docker%E9%95%9C%E5%83%8F%E9%83%A8%E7%BD%B2%E5%88%B0k8s%E9%9B%86%E7%BE%A4.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"郑天祺的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"docker镜像部署到k8s集群\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"一、搭建docker私有仓库 本文使用阿里云私有仓库（个人免费版），阿里云---&gt;容器镜像服务 image-20220411212506831 二、docker打包 1、程序目录 ll -rw-r--r-- 1 root root 872 4月 11 22:03 dockerfile -rw-r--r-- 1 root root 8678 4月 11 21:53 jdk-8u251-linux-x64.tar.gz -rw-r--r-- 1 root root 75306958 4月 11 21:47 ruoyi.jar\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"ztq\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"k8s\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"docker\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-04-11T21:20:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2023-06-10T12:47:14.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"docker镜像部署到k8s集群\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2022-04-11T21:20:00.000Z\\\",\\\"dateModified\\\":\\\"2023-06-10T12:47:14.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"ztq\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1686401234000,\"updatedTime\":1686401234000,\"contributors\":[{\"name\":\"zhengtianqi\",\"email\":\"270490096@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":5.05,\"words\":1516},\"filePathRelative\":\"posts/DevOps/docker镜像部署到k8s集群.md\",\"localizedDate\":\"2022年4月12日\",\"excerpt\":\"<h1> 一、搭建docker私有仓库</h1>\\n<p>本文使用阿里云私有仓库（个人免费版），阿里云---&gt;容器镜像服务</p>\\n<figure><img src=\\\"/assets/images/image-20220411212506831.png\\\" alt=\\\"image-20220411212506831\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>image-20220411212506831</figcaption></figure>\\n<h1> 二、docker打包</h1>\\n<p>1、程序目录</p>\\n<div class=\\\"language-java line-numbers-mode\\\" data-ext=\\\"java\\\"><pre class=\\\"language-java\\\"><code>ll\\n    \\n<span class=\\\"token operator\\\">-</span>rw<span class=\\\"token operator\\\">-</span>r<span class=\\\"token operator\\\">--</span>r<span class=\\\"token operator\\\">--</span> <span class=\\\"token number\\\">1</span> root root      <span class=\\\"token number\\\">872</span> <span class=\\\"token number\\\">4</span>月  <span class=\\\"token number\\\">11</span> <span class=\\\"token number\\\">22</span><span class=\\\"token operator\\\">:</span><span class=\\\"token number\\\">03</span> dockerfile\\n<span class=\\\"token operator\\\">-</span>rw<span class=\\\"token operator\\\">-</span>r<span class=\\\"token operator\\\">--</span>r<span class=\\\"token operator\\\">--</span> <span class=\\\"token number\\\">1</span> root root     <span class=\\\"token number\\\">8678</span> <span class=\\\"token number\\\">4</span>月  <span class=\\\"token number\\\">11</span> <span class=\\\"token number\\\">21</span><span class=\\\"token operator\\\">:</span><span class=\\\"token number\\\">53</span> jdk<span class=\\\"token operator\\\">-</span><span class=\\\"token number\\\">8</span>u251<span class=\\\"token operator\\\">-</span>linux<span class=\\\"token operator\\\">-</span>x64<span class=\\\"token punctuation\\\">.</span>tar<span class=\\\"token punctuation\\\">.</span>gz\\n<span class=\\\"token operator\\\">-</span>rw<span class=\\\"token operator\\\">-</span>r<span class=\\\"token operator\\\">--</span>r<span class=\\\"token operator\\\">--</span> <span class=\\\"token number\\\">1</span> root root <span class=\\\"token number\\\">75306958</span> <span class=\\\"token number\\\">4</span>月  <span class=\\\"token number\\\">11</span> <span class=\\\"token number\\\">21</span><span class=\\\"token operator\\\">:</span><span class=\\\"token number\\\">47</span> ruoyi<span class=\\\"token punctuation\\\">.</span>jar\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"autoDesc\":true}")
