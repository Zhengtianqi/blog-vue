import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as r,c as o,b as n,d as a,e,a as i}from"./app-0ce632a0.js";const d="/blog-vue/assets//images/Git工作流程.png",l={},c=i(`<h2 id="_1、git介绍" tabindex="-1"><a class="header-anchor" href="#_1、git介绍" aria-hidden="true">#</a> 1、Git介绍：</h2><pre><code>Git是目前世界上最先进的分布式版本控制系统。gitlab是公司搭建的代码版本控制平台，使用方法与github类似，项目负责人在gitlab上新建一个项目，并分享URL给开发人员。开发人员在负责人的gitlab项目页面上点

击“fork”按钮，将此项目fork到自己的gitlab上，这相当于是从负责人那拷贝了一份项目副本，无论开发人员如何修改代码都不会影响负责人那master分支上的代码。然后开发人员可以根据自己的项目分工，像对待普通项

目一样做clone、add、commit、push等操作。如果开发人员人为一个小模块做好了，可以点击“pull request”按钮，向负责人发送代码合并请求，要合并的代码文件也会以列表的形式同时发送给负责人，此时负责人会看到
</code></pre><p>开发人员的请求，经审核如果代码没问题则会合并模块，并向开发人员发送确认合并的通知。</p><h2 id="_2、为什么用gitlab" tabindex="-1"><a class="header-anchor" href="#_2、为什么用gitlab" aria-hidden="true">#</a> 2、为什么用GitLab？</h2><pre><code>清晰的项目管理和责任明确
清晰的看到产品迭代，为产品研发提供参考
能够形成项目管理课程，为我们的后续产品做准备，同时课程设计过程完全公开，降低产品和运营不匹配的问题。
</code></pre><h2 id="_3、git-工作区、暂存区和版本库" tabindex="-1"><a class="header-anchor" href="#_3、git-工作区、暂存区和版本库" aria-hidden="true">#</a> 3、Git 工作区、暂存区和版本库</h2><p>工作区：就是你在电脑里能看到的目录。</p><p>暂存区：英文叫stage, 或index。一般存放在 &quot;.git目录下&quot; 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。</p><p>版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。</p><h2 id="_4、git工作流程" tabindex="-1"><a class="header-anchor" href="#_4、git工作流程" aria-hidden="true">#</a> 4、Git工作流程</h2><h3 id="_1、一个分支" tabindex="-1"><a class="header-anchor" href="#_1、一个分支" aria-hidden="true">#</a> 1、一个分支</h3><p>克隆 Git 资源作为工作目录。</p><p>在克隆的资源上添加或修改文件。</p><p>如果其他人修改了，你可以更新资源。</p><p>在提交前查看修改。</p><p>提交修改。</p><h3 id="_2、多个分支" tabindex="-1"><a class="header-anchor" href="#_2、多个分支" aria-hidden="true">#</a> 2、多个分支</h3><p>fork项目，建立自己的分支[name]（直接git网页操作）</p><p>将master分支clone 下来（git clone）</p><p>修改当前分支为fork 的分支（git checkoout [name]）</p><p>代码的修改(commit and push)</p><p>如果需要合并到主分支：pull request merge</p><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_5、git配置及使用" tabindex="-1"><a class="header-anchor" href="#_5、git配置及使用" aria-hidden="true">#</a> 5、Git配置及使用：</h2><h3 id="_1-配置用户信息" tabindex="-1"><a class="header-anchor" href="#_1-配置用户信息" aria-hidden="true">#</a> 1）配置用户信息</h3><pre><code> 配置个人的用户名称和电子邮件地址：

 右键打开git bash命令行（如果设置了git的系统环境变量，就可以直接使用cmd命令行进行git操作）

     a）设置Git端上的用户名和用户邮箱（公司邮箱）
</code></pre><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">&quot;yourname&quot;</span>
$ git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email       <span class="token string">&quot;yourname@xxxx.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>     b）生成ssh公钥和私钥
</code></pre><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ ssh <span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span><span class="token class-name">C</span>       <span class="token string">&quot;yourname@xxxx.com&quot;</span>
一路回车
<span class="token class-name">C</span><span class="token operator">:</span><span class="token operator">/</span><span class="token class-name">Users</span><span class="token operator">/</span>admin<span class="token operator">/</span><span class="token punctuation">.</span>ssh会生成一个id_rsa<span class="token punctuation">.</span>pub公钥文件
word打开id_rsa<span class="token punctuation">.</span>pub将公钥添加进<span class="token class-name">GitLab</span> <span class="token operator">-&gt;</span> <span class="token class-name">Profile</span> <span class="token class-name">Settings</span> <span class="token operator">-&gt;</span> <span class="token constant">SSH</span> <span class="token class-name">Keys</span>
添加成功钉邮中会收到<span class="token constant">SSH</span> key was added <span class="token keyword">to</span> <span class="token namespace">your</span> account邮件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-查看配置" tabindex="-1"><a class="header-anchor" href="#_2-查看配置" aria-hidden="true">#</a> 2）查看配置</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git config <span class="token operator">--</span>list 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-创建仓库" tabindex="-1"><a class="header-anchor" href="#_3-创建仓库" aria-hidden="true">#</a> 3）创建仓库</h3><pre><code>     a）$ git clone：这是一种较为简单的初始化方式，当你已经有一个远程的Git版本库，只需要在本地克隆一份。 
</code></pre>`,33),u={href:"http://zzzzz.git",target:"_blank",rel:"noopener noreferrer"},v={href:"http://zzzzzz.git",target:"_blank",rel:"noopener noreferrer"},g=i(`<pre><code>注：git clone 时，可以所用不同的协议，包括 ssh, git, https 等，其中最常用的是 ssh，因为速度较快，还可以配置公钥免输入密码。 

     b）$ git init 和 $  git remote：这种方式稍微复杂一些，当你本地创建了一个工作目录，你可以进入这个目录，使用&#39;git init&#39;命令进行初始化；Git以后就会对该目录下的文件进行版本控制， 

这时候如果你需要将它放到远程服务器上，可以在远程服务器gitlab上创建一个目录，并把可访问的URL记录下来，此时你就可以利用&#39;git remote add&#39;命令来增加一个远程服务器端。 
</code></pre><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>例：
$ git init   <span class="token comment">// 该命令执行完后会在当前目录生成一个 .git 目录。 </span>
$ git add <span class="token punctuation">.</span>   <span class="token comment">// 是将当前更改或者新增的文件加入到Git的索引中，加入到Git的索引中就表示记入了版本历史中，这也是提交之前所需要执行的一步 </span>
$ touch <span class="token constant">README</span><span class="token punctuation">.</span>md   <span class="token comment">// 初始化一个README.md文件 </span>
$ git commit <span class="token operator">-</span>m <span class="token string">&quot;初始化项目版本&quot;</span>   <span class="token comment">// 提交当前工作空间的修改内容 </span>
$ git remote add origin  git<span class="token annotation punctuation">@git.gag.cn</span><span class="token operator">:</span>yourname<span class="token operator">/</span>demo<span class="token punctuation">.</span>git   <span class="token comment">// 关联远程仓库 </span>
$ git push <span class="token operator">-</span>u origin master   <span class="token comment">// 将操作提交到gitlab </span>
$ git log   <span class="token comment">// 查看历史日志 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-基本操作" tabindex="-1"><a class="header-anchor" href="#_4-基本操作" aria-hidden="true">#</a> 4）基本操作</h3><h4 id="a-远程仓库相关命令" tabindex="-1"><a class="header-anchor" href="#a-远程仓库相关命令" aria-hidden="true">#</a> a）远程仓库相关命令</h4><p>检出仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git clone http<span class="token operator">:</span><span class="token operator">/</span>zzzzzzzz<span class="token punctuation">.</span>git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git remote <span class="token operator">-</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git remote add <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span>url<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git remote rm <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git remote set<span class="token operator">-</span>url <span class="token operator">--</span>push <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token punctuation">[</span>newUrl<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>拉取远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git pull <span class="token punctuation">[</span>remoteName<span class="token punctuation">]</span> <span class="token punctuation">[</span>localBranchName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从其他的版本库（既可以是远程的也可以是本地的）将代码更新到本地，例如：&#39;git pull origin master&#39;就是将origin这个版本库的代码更新到本地的master主枝</p><p>推送远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git push <span class="token punctuation">[</span>remoteName<span class="token punctuation">]</span> <span class="token punctuation">[</span>localBranchName<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将本地commit的代码更新到远程版本库中，例如&#39;git push origin&#39;就会将本地的代码更新到名为orgin的远程版本库中</p><p>如果想把本地的某个分支test提交到远程仓库，并作为远程仓库的master分支，或者作为另外一个名叫test的分支，如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$git push origin test<span class="token operator">:</span>master    <span class="token comment">// 提交本地test分支作为远程的master分支 </span>

$git push origin test<span class="token operator">:</span>test    <span class="token comment">// 提交本地test分支作为远程的test分支 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="b-分支-branch-操作相关命令" tabindex="-1"><a class="header-anchor" href="#b-分支-branch-操作相关命令" aria-hidden="true">#</a> b）分支(branch)操作相关命令</h4><p>查看本地分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git branch 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>列出本地所有的分支 对分支的增、删、查等操作，例如&#39;git branch new_branch&#39;会从当前的工作版本创建一个叫做new_branch的新分支</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git branch <span class="token operator">-</span><span class="token class-name">D</span> new_branch <span class="token operator">--</span><span class="token operator">--</span>就会强制删除叫做new_branch的分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看远程分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git branch <span class="token operator">-</span>r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建本地分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git branch <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">--</span><span class="token operator">--</span>注意新分支创建后不会自动切换为当前分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git checkout <span class="token punctuation">[</span>name<span class="token punctuation">]</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Git的checkout有两个作用，其一是在不同的branch之间进行切换，例如&#39;git checkout new_branch&#39;就会切换到new_branch的分支上去；另一个功能是还原代码的作用，例如&#39;git checkout app/model/user.rb&#39;就会将user.rb文件从上一个已提交的版本中更新回来，未提交的内容全部会回滚。</p><p>创建新分支并立即切换到新分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git checkout <span class="token operator">-</span>b <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git branch <span class="token operator">-</span>d <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">--</span><span class="token operator">--</span> <span class="token operator">-</span>d选项只能删除已经参与了合并的分支，对于未有合并的分支是无法删除的。如果想强制删除一个分支，可以使用<span class="token operator">-</span><span class="token class-name">D</span>选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>合并分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git merge <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">--</span><span class="token operator">--</span>将名称为<span class="token punctuation">[</span>name<span class="token punctuation">]</span>的分支与当前分支合并
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建远程分支(本地分支push到远程)：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git push origin <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除远程分支：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git push origin       <span class="token operator">:</span>heads<span class="token operator">/</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> 或 $ gitpush origin <span class="token operator">:</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建空的分支：(执行命令之前记得先提交你当前分支的修改，否则会被强制删干净)</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$git symbolic<span class="token operator">-</span>ref <span class="token constant">HEAD</span> refs<span class="token operator">/</span>heads<span class="token operator">/</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span>
$rm <span class="token punctuation">.</span>git<span class="token operator">/</span>index
$git clean <span class="token operator">-</span>fdx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="c-版本-tag-操作相关命令" tabindex="-1"><a class="header-anchor" href="#c-版本-tag-操作相关命令" aria-hidden="true">#</a> c）版本(tag)操作相关命令</h4><p>查看版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git tag <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以将某个具体的版本打上一个标签，这样你就不需要记忆复杂的版本号哈希值了，例如你可以使用&#39;git tag revert_version bbaf6fb5060b4875b18ff9ff637ce118256d6f20&#39;来标记这个被你还原的版本，那么以后你想查看该版本时，就可以使用 revert_version标签名，而不是哈希值了</p><p>删除版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git tag <span class="token operator">-</span>d <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看远程版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git tag <span class="token operator">-</span>r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建远程版本(本地版本push到远程)：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git push origin <span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除远程版本：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git push origin  <span class="token operator">:</span>refs<span class="token operator">/</span>tag<span class="token operator">/</span><span class="token punctuation">[</span>name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>合并远程仓库的tag到本地：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git pull origin <span class="token operator">--</span>tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上传本地tag到远程仓库：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git push origin <span class="token operator">--</span>tag
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建带注释的tag：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git tag <span class="token operator">-</span>a <span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">-</span>m &#39;yourMessage&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="d-子模块-submodule-相关操作命令" tabindex="-1"><a class="header-anchor" href="#d-子模块-submodule-相关操作命令" aria-hidden="true">#</a> d）子模块(submodule)相关操作命令</h4><p>添加子模块：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git submodule add <span class="token punctuation">[</span>url<span class="token punctuation">]</span>       <span class="token punctuation">[</span>path<span class="token punctuation">]</span>

 如：$git submodule add git<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>github<span class="token punctuation">.</span>com<span class="token operator">/</span>soberh<span class="token operator">/</span>ui<span class="token operator">-</span>libs<span class="token punctuation">.</span>git src<span class="token operator">/</span>main<span class="token operator">/</span>webapp<span class="token operator">/</span>ui<span class="token operator">-</span>libs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化子模块：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git submodule init <span class="token operator">--</span><span class="token operator">--</span>只在首次检出仓库时运行一次就行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更新子模块：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git submodule update <span class="token operator">--</span><span class="token operator">--</span>每次更新或切换分支后都需要运行一下
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除子模块：（分4步走）</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span><span class="token punctuation">)</span>$ git rm <span class="token operator">--</span>cached <span class="token punctuation">[</span>path<span class="token punctuation">]</span>
<span class="token number">2</span><span class="token punctuation">)</span>编辑“<span class="token punctuation">.</span>gitmodules”文件，将子模块的相关配置节点删除掉
<span class="token number">3</span><span class="token punctuation">)</span>编辑“ <span class="token punctuation">.</span>git<span class="token operator">/</span>config”文件，将子模块的相关配置节点删除掉
<span class="token number">4</span><span class="token punctuation">)</span>手动删除子模块残留的目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="e-补充" tabindex="-1"><a class="header-anchor" href="#e-补充" aria-hidden="true">#</a> e）补充</h4><p>更改或者新增的文件：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git add       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>是将当前更改或者新增的文件加入到Git的索引中，加入到Git的索引中就表示记入了版本历史中，这也是提交之前所需要执行的一步，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>例如<span class="token operator">:</span> git add app<span class="token operator">/</span>model<span class="token operator">/</span>user<span class="token punctuation">.</span>rb&#39;就会增加app<span class="token operator">/</span>model<span class="token operator">/</span>user<span class="token punctuation">.</span>rb文件到<span class="token class-name">Git</span>的索引中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除文件：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git rm   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从当前的工作空间中和索引中删除文件，</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>例如<span class="token operator">:</span> git rm app<span class="token operator">/</span>model<span class="token operator">/</span>user<span class="token punctuation">.</span>rb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看历史日志：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还原：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git revert 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还原一个版本的修改，必须提供一个具体的Git版本号，例如&#39;git revert bbaf6fb5060b4875b18ff9ff637ce118256d6f20&#39;，Git的版本号都是生成的一个哈希值</p><p>提交：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>$ git commit  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当前工作空间的修改内容</p><p>强制pull</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>git fetch <span class="token operator">--</span>all 
git reset <span class="token operator">--</span>hard origin<span class="token operator">/</span>master
git pull
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>强制push</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>push <span class="token operator">-</span>u <span class="token punctuation">[</span>url<span class="token punctuation">]</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="f-忽略一些文件、文件夹不提交" tabindex="-1"><a class="header-anchor" href="#f-忽略一些文件、文件夹不提交" aria-hidden="true">#</a> f）忽略一些文件、文件夹不提交</h4><p>在仓库根目录下创建名称为“.gitignore”的文件，写入不需要的文件夹名或文件，每个元素占一行即可，如</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>target
bin
<span class="token operator">*</span><span class="token punctuation">.</span>db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-解决冲突" tabindex="-1"><a class="header-anchor" href="#_5-解决冲突" aria-hidden="true">#</a> 5)解决冲突</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">IDEA</span>  <span class="token operator">-&gt;</span>   <span class="token constant">VCS</span>  <span class="token operator">-&gt;</span> git  <span class="token operator">-&gt;</span>  <span class="token class-name">Branches</span>  <span class="token operator">-&gt;</span>   选中需要合并的远程分支  <span class="token operator">-</span> <span class="token operator">&gt;</span>  <span class="token class-name">Rebase</span> current onto selected
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,101);function m(b,h){const s=p("ExternalLinkIcon");return r(),o("div",null,[c,n("p",null,[a("例：$ git clone "),n("a",u,[a("http://zzzzz.git"),e(s)]),a(" // '"),n("a",v,[a("http://zzzzzz.git"),e(s)]),a("' 这个URL地址的远程版本库，完全克隆到本地demo目录下")]),g])}const x=t(l,[["render",m],["__file","Git梳理.html.vue"]]);export{x as default};
