import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as r,c,b as a,d as s,e,a as p}from"./app-0ce632a0.js";const l="/blog-vue/assets/images/image-20220404214709099.png",i="/blog-vue/assets/images/image-20220404214514222.png",d={},u=p(`<h2 id="_1-安装要求" tabindex="-1"><a class="header-anchor" href="#_1-安装要求" aria-hidden="true">#</a> 1. 安装要求</h2><p>在开始之前，部署Kubernetes集群机器需要满足以下几个条件：</p><ul><li>一台或多台机器，操作系统 CentOS7.x-86_x64</li><li>硬件配置：2GB或更多RAM，2个CPU或更多CPU，硬盘30GB或更多</li><li>可以访问外网，需要拉取镜像，如果服务器不能上网，需要提前下载镜像并导入节点</li><li>禁止swap分区</li><li>docker和k8s保持官网一致的版本，否则有报错</li></ul><h2 id="_2-准备环境" tabindex="-1"><a class="header-anchor" href="#_2-准备环境" aria-hidden="true">#</a> 2. 准备环境</h2><table><thead><tr><th>角色</th><th>IP</th></tr></thead><tbody><tr><td>master</td><td>192.168.2.145</td></tr><tr><td>node1</td><td>192.168.2.146</td></tr><tr><td>node2</td><td>192.168.2.147</td></tr></tbody></table><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code># 关闭防火墙
systemctl stop firewalld # 临时
systemctl disable firewalld # 永久

# 关闭selinux
setenforce <span class="token number">0</span>  # 临时
sed <span class="token operator">-</span>i &#39;s<span class="token operator">/</span>enforcing<span class="token operator">/</span>disabled<span class="token operator">/</span>&#39; <span class="token operator">/</span>etc<span class="token operator">/</span>selinux<span class="token operator">/</span>config  # 永久

# 关闭swap
swapoff <span class="token operator">-</span>a  # 临时
sed <span class="token operator">-</span>ri &#39;s<span class="token operator">/</span><span class="token punctuation">.</span>*swap<span class="token punctuation">.</span>*<span class="token operator">/</span>#<span class="token operator">&amp;</span><span class="token operator">/</span>&#39; <span class="token operator">/</span>etc<span class="token operator">/</span>fstab    # 永久

# 根据规划设置主机名
hostnamectl set<span class="token operator">-</span>hostname <span class="token generics"><span class="token punctuation">&lt;</span>hostname<span class="token punctuation">&gt;</span></span>

# 在master添加hosts
cat <span class="token operator">&gt;&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>hosts <span class="token operator">&lt;&lt;</span> <span class="token constant">EOF</span>
<span class="token number">192.168</span><span class="token number">.2</span><span class="token number">.145</span> k8smaster
<span class="token number">192.168</span><span class="token number">.2</span><span class="token number">.146</span> k8snode1
<span class="token number">192.168</span><span class="token number">.2</span><span class="token number">.147</span> k8snode2
<span class="token constant">EOF</span>

# 将桥接的<span class="token class-name">IPv4</span>流量传递到iptables的链
cat <span class="token operator">&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>sysctl<span class="token punctuation">.</span>d<span class="token operator">/</span>k8s<span class="token punctuation">.</span>conf <span class="token operator">&lt;&lt;</span> <span class="token constant">EOF</span>
net<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>bridge<span class="token operator">-</span>nf<span class="token operator">-</span>call<span class="token operator">-</span>ip6tables <span class="token operator">=</span> <span class="token number">1</span>
net<span class="token punctuation">.</span>bridge<span class="token punctuation">.</span>bridge<span class="token operator">-</span>nf<span class="token operator">-</span>call<span class="token operator">-</span>iptables <span class="token operator">=</span> <span class="token number">1</span>
<span class="token constant">EOF</span>
sysctl <span class="token operator">--</span>system  # 生效

# 时间同步
yum install ntpdate <span class="token operator">-</span>y
ntpdate time<span class="token punctuation">.</span>windows<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-所有节点安装docker-kubeadm-kubelet" tabindex="-1"><a class="header-anchor" href="#_3-所有节点安装docker-kubeadm-kubelet" aria-hidden="true">#</a> 3. 所有节点安装Docker/kubeadm/kubelet</h2><p>Kubernetes默认CRI（容器运行时）为Docker，因此先安装Docker。</p><h3 id="_3-1-安装docker" tabindex="-1"><a class="header-anchor" href="#_3-1-安装docker" aria-hidden="true">#</a> 3.1 安装Docker</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>docker<span class="token operator">-</span>ce<span class="token operator">/</span>linux<span class="token operator">/</span>centos<span class="token operator">/</span>docker<span class="token operator">-</span>ce<span class="token punctuation">.</span>repo <span class="token operator">-</span><span class="token class-name">O</span> <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>docker<span class="token operator">-</span>ce<span class="token punctuation">.</span>repo
$ yum <span class="token operator">-</span>y install docker<span class="token operator">-</span>ce<span class="token operator">-</span><span class="token number">18.06</span><span class="token number">.1</span><span class="token punctuation">.</span>ce<span class="token operator">-</span><span class="token number">3.</span>el7
$ systemctl enable docker <span class="token operator">&amp;&amp;</span> systemctl start docker
$ docker <span class="token operator">--</span>version
<span class="token class-name">Docker</span> version <span class="token number">18.06</span><span class="token number">.1</span><span class="token operator">-</span>ce<span class="token punctuation">,</span> build e68fc7a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ cat <span class="token operator">&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>docker<span class="token operator">/</span>daemon<span class="token punctuation">.</span>json <span class="token operator">&lt;&lt;</span> <span class="token constant">EOF</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://b9pmyelo.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token constant">EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-添加阿里云yum软件源" tabindex="-1"><a class="header-anchor" href="#_3-2-添加阿里云yum软件源" aria-hidden="true">#</a> 3.2 添加阿里云YUM软件源</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ cat <span class="token operator">&gt;</span> <span class="token operator">/</span>etc<span class="token operator">/</span>yum<span class="token punctuation">.</span>repos<span class="token punctuation">.</span>d<span class="token operator">/</span>kubernetes<span class="token punctuation">.</span>repo <span class="token operator">&lt;&lt;</span> <span class="token constant">EOF</span>
<span class="token punctuation">[</span>kubernetes<span class="token punctuation">]</span>
name<span class="token operator">=</span><span class="token class-name">Kubernetes</span>
baseurl<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>repos<span class="token operator">/</span>kubernetes<span class="token operator">-</span>el7<span class="token operator">-</span>x86_64
enabled<span class="token operator">=</span><span class="token number">1</span>
gpgcheck<span class="token operator">=</span><span class="token number">0</span>
repo_gpgcheck<span class="token operator">=</span><span class="token number">0</span>
gpgkey<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>doc<span class="token operator">/</span>yum<span class="token operator">-</span>key<span class="token punctuation">.</span>gpg https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>kubernetes<span class="token operator">/</span>yum<span class="token operator">/</span>doc<span class="token operator">/</span>rpm<span class="token operator">-</span><span class="token keyword">package</span><span class="token operator">-</span>key<span class="token punctuation">.</span>gpg
<span class="token constant">EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-安装kubeadm-kubelet和kubectl" tabindex="-1"><a class="header-anchor" href="#_3-3-安装kubeadm-kubelet和kubectl" aria-hidden="true">#</a> 3.3 安装kubeadm，kubelet和kubectl</h3><p>由于版本更新频繁，这里指定版本号部署：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ yum install <span class="token operator">-</span>y kubelet<span class="token operator">-</span><span class="token number">1.18</span><span class="token number">.0</span> kubeadm<span class="token operator">-</span><span class="token number">1.18</span><span class="token number">.0</span> kubectl<span class="token operator">-</span><span class="token number">1.18</span><span class="token number">.0</span>
$ systemctl enable kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-部署kubernetes-master" tabindex="-1"><a class="header-anchor" href="#_4-部署kubernetes-master" aria-hidden="true">#</a> 4. 部署Kubernetes Master</h2><p>在192.168.2.145（Master）执行。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ kubeadm init \\
  <span class="token operator">--</span>apiserver<span class="token operator">-</span>advertise<span class="token operator">-</span>address<span class="token operator">=</span><span class="token number">192.168</span><span class="token number">.2</span><span class="token number">.145</span> \\
  <span class="token operator">--</span>image<span class="token operator">-</span>repository registry<span class="token punctuation">.</span>cn<span class="token operator">-</span>hangzhou<span class="token punctuation">.</span>aliyuncs<span class="token punctuation">.</span>com<span class="token operator">/</span>google_containers \\
  <span class="token operator">--</span>kubernetes<span class="token operator">-</span>version v1<span class="token punctuation">.</span><span class="token number">23.5</span> \\
  <span class="token operator">--</span>service<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token number">10.96</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">12</span> \\
  <span class="token operator">--</span>pod<span class="token operator">-</span>network<span class="token operator">-</span>cidr<span class="token operator">=</span><span class="token number">10.244</span><span class="token number">.0</span><span class="token number">.0</span><span class="token operator">/</span><span class="token number">16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于默认拉取镜像地址k8s.gcr.io国内无法访问，这里指定阿里云镜像仓库地址。</p><p>使用kubectl工具：</p><p>从节点没有，从主节点拷过去</p>`,22),k={href:"https://blog.csdn.net/M82_A1/article/details/99671934",target:"_blank",rel:"noopener noreferrer"},m=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>mkdir <span class="token operator">-</span>p $<span class="token constant">HOME</span><span class="token operator">/</span><span class="token punctuation">.</span>kube
sudo cp <span class="token operator">-</span>i <span class="token operator">/</span>etc<span class="token operator">/</span>kubernetes<span class="token operator">/</span>admin<span class="token punctuation">.</span>conf $<span class="token constant">HOME</span><span class="token operator">/</span><span class="token punctuation">.</span>kube<span class="token operator">/</span>config
sudo chown $<span class="token punctuation">(</span>id <span class="token operator">-</span>u<span class="token punctuation">)</span><span class="token operator">:</span>$<span class="token punctuation">(</span>id <span class="token operator">-</span>g<span class="token punctuation">)</span> $<span class="token constant">HOME</span><span class="token operator">/</span><span class="token punctuation">.</span>kube<span class="token operator">/</span>config
$ kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+'" alt="image-20220404214709099" tabindex="0" loading="lazy"><figcaption>image-20220404214709099</figcaption></figure><h2 id="_5-加入kubernetes-node" tabindex="-1"><a class="header-anchor" href="#_5-加入kubernetes-node" aria-hidden="true">#</a> 5. 加入Kubernetes Node</h2><p>在192.168.2.146/13（Node）执行。</p><p>向集群添加新节点，执行在kubeadm init输出的kubeadm join命令：（这条命令是Master执行init时生成的）</p><figure><img src="'+i+`" alt="image-20220404214514222" tabindex="0" loading="lazy"><figcaption>image-20220404214514222</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ kubeadm join <span class="token number">192.168</span><span class="token number">.2</span><span class="token number">.145</span><span class="token operator">:</span><span class="token number">6443</span> <span class="token operator">--</span>token tps61f<span class="token punctuation">.</span><span class="token number">37</span>r065fhvmvgmxk6 \\
        <span class="token operator">--</span>discovery<span class="token operator">-</span>token<span class="token operator">-</span>ca<span class="token operator">-</span>cert<span class="token operator">-</span>hash sha256<span class="token operator">:</span>ccff7f62596ebe95207ec22d3d32fa9183a0200d7cfc50b6a10cfa1626593a2e
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认token有效期为24小时，当过期之后，该token就不可用了。这时就需要重新创建token，操作如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>kubeadm token create <span class="token operator">--</span>print<span class="token operator">-</span>join<span class="token operator">-</span>command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-部署cni网络插件" tabindex="-1"><a class="header-anchor" href="#_6-部署cni网络插件" aria-hidden="true">#</a> 6. 部署CNI网络插件</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>wget https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>coreos<span class="token operator">/</span>flannel<span class="token operator">/</span>master<span class="token operator">/</span><span class="token class-name">Documentation</span><span class="token operator">/</span>kube<span class="token operator">-</span>flannel<span class="token punctuation">.</span>yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认镜像地址无法访问，sed命令修改为docker hub镜像仓库。</p>`,12),b={href:"https://blog.csdn.net/weixin_43298522/article/details/109769013",target:"_blank",rel:"noopener noreferrer"},v=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>kubectl apply <span class="token operator">-</span>f https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>raw<span class="token punctuation">.</span>githubusercontent<span class="token punctuation">.</span>com<span class="token operator">/</span>coreos<span class="token operator">/</span>flannel<span class="token operator">/</span>master<span class="token operator">/</span><span class="token class-name">Documentation</span><span class="token operator">/</span>kube<span class="token operator">-</span>flannel<span class="token punctuation">.</span>yml

kubectl get pods <span class="token operator">-</span>n kube<span class="token operator">-</span>system
<span class="token constant">NAME</span>                          <span class="token constant">READY</span>   <span class="token constant">STATUS</span>    <span class="token constant">RESTARTS</span>   <span class="token constant">AGE</span>
kube<span class="token operator">-</span>flannel<span class="token operator">-</span>ds<span class="token operator">-</span>amd64<span class="token operator">-</span><span class="token number">2</span>pc95   <span class="token number">1</span><span class="token operator">/</span><span class="token number">1</span>     <span class="token class-name">Running</span>   <span class="token number">0</span>          <span class="token number">72</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-测试kubernetes集群" tabindex="-1"><a class="header-anchor" href="#_7-测试kubernetes集群" aria-hidden="true">#</a> 7. 测试kubernetes集群</h2><p>在Kubernetes集群中创建一个pod，验证是否正常运行：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ kubectl create deployment nginx <span class="token operator">--</span>image<span class="token operator">=</span>nginx
$ kubectl expose deployment nginx <span class="token operator">--</span>port<span class="token operator">=</span><span class="token number">80</span> <span class="token operator">--</span>type<span class="token operator">=</span><span class="token class-name">NodePort</span>
$ kubectl get pod<span class="token punctuation">,</span>svc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g={href:"http://NodeIP",target:"_blank",rel:"noopener noreferrer"};function h(f,_){const n=t("ExternalLinkIcon");return r(),c("div",null,[u,a("p",null,[a("a",k,[s("The connection to the server localhost:8080 was refused - did you specify the right host or port?"),e(n)]),s("）")]),m,a("p",null,[s("可以参考"),a("a",b,[s("kube-flannel.yml(已修改镜像下载数据源)"),e(n)])]),v,a("p",null,[s("访问地址："),a("a",g,[s("http://NodeIP"),e(n)]),s(":Port")])])}const j=o(d,[["render",h],["__file","k8s集群搭建.html.vue"]]);export{j as default};
