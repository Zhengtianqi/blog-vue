import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a as e}from"./app-0ce632a0.js";const o={},r=e(`<p>Docker虚拟化技术底层是基于LXC+Cgroups+AUFS（Overlay）技术实现，而我们有熟知Cgroups是Linux内核提供的一种可以限制、记录、隔离进程组（Process Groups）所使用的物理资源的机制。 Docker虚拟化的产物是Docker容器，基于Docker Engine启动容器时，默认会给容器指定和分配各种子系统：CPU子系统、Memory子系统、IO子系统、NET子系统等。 启动一个容器，会分配Network Namespace（子系统）提供了一份独立的网络环境，包括网卡、路由、Iptables规则等，容器跟其他容器的Network Namespace是相互隔离的。 通过Docker run创建Docker容器时，可以使用–net选项指定Docker容器的网络模式，Docker默认有四种网络模式：</p><h1 id="一、docker的四大网络模式" tabindex="-1"><a class="header-anchor" href="#一、docker的四大网络模式" aria-hidden="true">#</a> 一、Docker的四大网络模式</h1><ul><li>桥接模式（bridge) Docker容器的Bridge模式也是Docker默认的网络模式，该模式会为每个容器分配Network Namespace子系统，会自动给每个容器虚拟出自己的网卡、IP、网关、路由等信息，无需手工添加。默认创建的Docker容器会统一通过一对veth虚拟网卡，连接到一个虚拟网桥交换机Docker0上，所有的容器的网络加入到一个二层交换机网络里面，即同一宿主机的所有容器之间都是可以相互联通和访问的。</li><li>主机模式（host） 新创建的Docker容器不会创建自己的网卡，不会再虚拟出自己的网卡、IP、网关、路由等信息，而是和宿主机共享IP和端口等信息，其他的软件、目录还是相互独立的。两个容器除了网络方面相同之外，其他的如文件系统、进程列表等还是相互隔离的。相信安装过虚拟机的同学一定很眼熟，主机模式也可以叫宿主机模式，顾名思义，Docker容器和宿主机共享一个网络环境。</li><li>容器模式（container） 新创建的Docker容器不会创建自己的网卡，不会再虚拟出自己的网卡、IP、网关、路由等信息，而是和指定的Docker容器共享IP和端口等信息，其他的软件、目录还是相互独立的。两个容器除了网络方面相同之外，其他的如文件系统、进程列表等还是相互隔离的。如果依附的Docker容器关闭，新的Docker容器网络也会丢失。容器模式里，启动的每个容器网络互通，共享一个网络环境，也就是每个容器通过ifconfig查询到的ip地址是一样的。</li><li>无网络模式（none） 无网络模式（none）与其他的模式都不同，如果Docker容器使用None模式，Docker容器会拥有自己的Network Namespace子系统，但是Docker引擎并不会为新启动的Docker容器配置任何的网络信息。即新创建的Docker容器不会虚拟出自己的网卡、IP、网关、路由等信息，而是需要手工为Docker容器添加网卡、配置IP、路由等信息，在企业实战环境中，通常会使用Pipework工具为Docker容器指定IP等信息。</li></ul><h1 id="二、构建命令" tabindex="-1"><a class="header-anchor" href="#二、构建命令" aria-hidden="true">#</a> 二、构建命令</h1><h2 id="桥接模式-bridge" tabindex="-1"><a class="header-anchor" href="#桥接模式-bridge" aria-hidden="true">#</a> 桥接模式（bridge)</h2><p>首先我们使用Docker默认创建的网桥（bridge），可以通过命令--net=bridge 指定为网桥模式，该参数为默认参数，所以无需指定，通过指定 -p 或 -P 参数可以让外部可以访问容器内部的网络程序，下面将详细说明。 -P（大P）：当使用该选项时，Docker会随机创建一个端口映射到内部容器开放的端口，也就是expose命令暴露的端口（expose命令将在下一篇Dockerfile构建中说明），启动一个nginx容器并指定-P参数,具体命令如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker run <span class="token operator">-</span>it <span class="token operator">-</span>d —name<span class="token operator">=</span>nginx_P <span class="token operator">-</span><span class="token class-name">P</span> nginx<span class="token operator">:</span>web bash 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-p（小p）：使用该参数可以指定要映射的IP和端口，但是在一个指定端口上只可以绑定一个容器。如下：</p><h3 id="_1-hostport-containerport-映射所有接口地址" tabindex="-1"><a class="header-anchor" href="#_1-hostport-containerport-映射所有接口地址" aria-hidden="true">#</a> （1）hostPort:containerPort（映射所有接口地址）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 将宿主机的 <span class="token number">80</span>端口映射到容器的 <span class="token number">80</span>端口。
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d <span class="token operator">--</span>name<span class="token operator">=</span>nginx_p <span class="token operator">-</span>p <span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span> nginx<span class="token operator">:</span>web bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ip-hostport-containerport" tabindex="-1"><a class="header-anchor" href="#_2-ip-hostport-containerport" aria-hidden="true">#</a> （2）ip:hostPort:containerPort</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 指定宿主机的<span class="token constant">IP</span>地址和端口映射到容器的端口（映射指定地址的指定端口）。
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d <span class="token operator">--</span>name<span class="token operator">=</span>nginx_p <span class="token operator">-</span>p <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span> nginx<span class="token operator">:</span>web bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-ip-containerport-映射指定地址的任意端口" tabindex="-1"><a class="header-anchor" href="#_3-ip-containerport-映射指定地址的任意端口" aria-hidden="true">#</a> （3）ip::containerPort（映射指定地址的任意端口）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 绑定 localhost 的任意端口到容器的 <span class="token number">80</span> 端口，本地主机会自动分配一个端口。
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d —name<span class="token operator">=</span>nginx_p <span class="token operator">-</span>p <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">::</span><span class="token number">80</span> nginx<span class="token operator">:</span>web bash
# 指定宿主机的<span class="token constant">IP</span>地址和随机端口映射到容器的端口。
# <span class="token class-name">Tips</span>： 还可以使用 udp 参数来指定 udp 端口，默认使用的协议为<span class="token constant">TCP</span>，指定宿主机的<span class="token constant">IP</span>地址和端口映射到容器的端口，并指定为udp模式。
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d <span class="token operator">--</span>name<span class="token operator">=</span>nginx_p <span class="token operator">-</span>p <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">80</span><span class="token operator">:</span><span class="token number">80</span><span class="token operator">/</span>udp nginx<span class="token operator">:</span>web bash 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="主机模式-host" tabindex="-1"><a class="header-anchor" href="#主机模式-host" aria-hidden="true">#</a> 主机模式（host）</h2><p>该网络模式中，主机和Docker容器将共享一个网络环境，主机和容器各自拥有主机的回环网卡L0，该模式将禁用Docker容器的网络隔离，实际上继承了宿主机的IP地址。该模式比bridge模式更快（因为没有路由开销），但是它将容器直接暴露在公共网络，有一定得安全隐患。，接下来，我们创建启动一个容器，并指定网络类型为host模式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 启动虚拟机并指定网络模式为host<span class="token punctuation">;</span>
docker run <span class="token operator">-</span>d —net<span class="token operator">=</span>host —name<span class="token operator">=</span>centos_host <span class="token operator">-</span>it centos<span class="token operator">:</span><span class="token number">6.10</span>
#使用如下命令进入容器（注意，使用attach会有同步阻塞的问题，多个窗口使用该命令进入，会同步显示，若某一个窗口发生阻塞，将会阻塞所有窗口）
docker exec <span class="token operator">-</span>it <span class="token punctuation">[</span>centos_host<span class="token operator">|</span>container_id<span class="token punctuation">]</span><span class="token operator">/</span>bin<span class="token operator">/</span>bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过查询宿主机和容器的ip地址，我们发现，容器和宿主机ip地址一模一样，也就是，Docker和宿主机共享了一个网络空间eth0网络空间。</p><h2 id="容器模式-container" tabindex="-1"><a class="header-anchor" href="#容器模式-container" aria-hidden="true">#</a> 容器模式（container）</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 先以普通网络模式<span class="token punctuation">(</span>net<span class="token punctuation">)</span> 启动一个容器，接下来使用container模式，再次启动一个同样的容器，指定不同的名称
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d <span class="token operator">--</span>name<span class="token operator">=</span>centos_net_1 centos<span class="token operator">:</span><span class="token number">6.10</span> bash   
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d <span class="token operator">--</span>net<span class="token operator">=</span>container<span class="token operator">:</span>centos_net_1 <span class="token operator">--</span>name<span class="token operator">=</span>centos_net_2 centos<span class="token operator">:</span><span class="token number">6.10</span> bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时，我们使用exec命令分别登入两个容器，执行ifconfig命令，两个容器使用的是同一个ip地址，说明两个容器共享了一个网络空间。</p><h2 id="无网络模式-none" tabindex="-1"><a class="header-anchor" href="#无网络模式-none" aria-hidden="true">#</a> 无网络模式（none）</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 该模式表示没有配置网络模式，将不会分配网络环境，若宿主机或其它容器需要和其通信，需要配置网卡，<span class="token constant">IP</span>地址，路由信息。
docker run <span class="token operator">-</span>it <span class="token operator">-</span>d —name<span class="token operator">=</span>centos_none —net<span class="token operator">=</span>none centos<span class="token operator">:</span><span class="token number">6.10</span> bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、常用命令" tabindex="-1"><a class="header-anchor" href="#三、常用命令" aria-hidden="true">#</a> 三、常用命令</h1><h2 id="查看网络模式" tabindex="-1"><a class="header-anchor" href="#查看网络模式" aria-hidden="true">#</a> 查看网络模式</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker network ls
docker network inspect host
netstat <span class="token operator">-</span>tunlp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看容器信息-包含配置、环境、网关、挂载、cmd等等信息" tabindex="-1"><a class="header-anchor" href="#查看容器信息-包含配置、环境、网关、挂载、cmd等等信息" aria-hidden="true">#</a> 查看容器信息(包含配置、环境、网关、挂载、cmd等等信息）</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker inspect 容器<span class="token constant">ID</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="暴露端口" tabindex="-1"><a class="header-anchor" href="#暴露端口" aria-hidden="true">#</a> 暴露端口</h2><p>-p 自定义端口 ( 宿主机端口:容器内端口 )</p><h2 id="创建网络" tabindex="-1"><a class="header-anchor" href="#创建网络" aria-hidden="true">#</a> 创建网络</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker network create <span class="token operator">-</span>d bridge my<span class="token operator">-</span>net   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>-d 参数指定 Docker 网络类型，有 bridge/overlay 。其中 overlay 网络 类型用于 Docker Swarm mode，该模式可以实现多宿主机的容器互联。</p><h2 id="容器绑定网络" tabindex="-1"><a class="header-anchor" href="#容器绑定网络" aria-hidden="true">#</a> 容器绑定网络</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>docker run <span class="token operator">-</span>it <span class="token operator">-</span>d <span class="token operator">--</span>name web01 <span class="token operator">--</span>network my<span class="token operator">-</span>net nginx<span class="token operator">:</span>web sh  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动一个名为web01的容器，并指定网络为刚才我们创建的 虚拟网络，以同样的方式启动web02,web03，三个容器启动完成之后，我们可以使用ping命令来检测是否已完成互联，接下来，我们登入web01 容器，并执行命令 ping web02 或 ping web03：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ # ping web02<span class="token punctuation">;</span>
<span class="token class-name">PING</span> <span class="token function">web02</span><span class="token punctuation">(</span><span class="token number">172.19</span><span class="token number">.0</span><span class="token number">.2</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token number">52</span> data bytes
<span class="token number">52</span> bytes from <span class="token number">172.19</span><span class="token number">.0</span><span class="token number">.2</span><span class="token operator">:</span> seq<span class="token operator">=</span><span class="token number">0</span> ttl<span class="token operator">=</span><span class="token number">64</span> time<span class="token operator">=</span><span class="token number">0.052</span> ms
<span class="token number">52</span> bytes from <span class="token number">172.19</span><span class="token number">.0</span><span class="token number">.2</span><span class="token operator">:</span> seq<span class="token operator">=</span><span class="token number">1</span> ttl<span class="token operator">=</span><span class="token number">64</span> time<span class="token operator">=</span><span class="token number">0.018</span> ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="三、docker-数据卷和数据卷容器" tabindex="-1"><a class="header-anchor" href="#三、docker-数据卷和数据卷容器" aria-hidden="true">#</a> 三、Docker 数据卷和数据卷容器</h1><p>管理 Docker 容器中数据主要有两种方式：数据卷（Data Volumes）和数据卷容器（Data Volumes Containers）。数据卷是一个供容器使用的特殊目录，位于容器中。可将宿主机的目录挂载到数据卷上，对数据卷的修改操作立刻可见，并且更新数据不会影响镜像，从而实现数据在宿主机与容器之间的迁移。数据卷的使用类似于 Linux 下对目录进行的 mount 操作。如果需要在容器之间共享一些数据，最简单的方法就是使用数据卷容器。数据卷容器是一个普通的容器，专门提供数据卷给其他容器挂载使用。</p>`,39),p=[r];function t(c,i){return n(),s("div",null,p)}const k=a(o,[["render",t],["__file","Docker网络模型.html.vue"]]);export{k as default};
