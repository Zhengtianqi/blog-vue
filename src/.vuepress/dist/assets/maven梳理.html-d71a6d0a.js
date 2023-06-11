import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as e,a as s}from"./app-0ce632a0.js";const i="/blog-vue/assets/images/maven配置.png",p="/blog-vue/assets/images/1618244002479.png",r="/blog-vue/assets/images/1618244073306.png",t="/blog-vue/assets/images/1618244110010.png",o="/blog-vue/assets/images/1618244137853.png",c="/blog-vue/assets/images/1618244166891.png",l="/blog-vue/assets/images/1618244193984.png",d="/blog-vue/assets/images/1618244251013.png",m="/blog-vue/assets/images/1618244289269.png",v="/blog-vue/assets/images/1618244361109.png",h="/blog-vue/assets/images/1618244387386.png",u="/blog-vue/assets/images/1618244497271.png",g="/blog-vue/assets/images/1618244522945.png",b="/blog-vue/assets/images/1618244544994.png",f="/blog-vue/assets/images/1618244566899.png",k="/blog-vue/assets/images/1618244592782.png",_="/blog-vue/assets/images/1618244623527.png",x={},y=s(`<h1 id="maven使用" tabindex="-1"><a class="header-anchor" href="#maven使用" aria-hidden="true">#</a> Maven使用</h1><h2 id="maven的命令" tabindex="-1"><a class="header-anchor" href="#maven的命令" aria-hidden="true">#</a> maven的命令：</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>maven常用命令

创建maven项目：mvn archetype<span class="token operator">:</span>create
指定 group： <span class="token operator">-</span><span class="token class-name">DgroupId</span><span class="token operator">=</span>packageName
指定 artifact：<span class="token operator">-</span><span class="token class-name">DartifactId</span><span class="token operator">=</span>projectName
创建web项目：<span class="token operator">-</span><span class="token class-name">DarchetypeArtifactId</span><span class="token operator">=</span>maven<span class="token operator">-</span>archetype<span class="token operator">-</span>webapp 
创建maven项目：mvn archetype<span class="token operator">:</span>generate
验证项目是否正确：mvn validate
maven 打包：mvn <span class="token keyword">package</span>
只打jar包：mvn jar<span class="token operator">:</span>jar
生成源码jar包：mvn source<span class="token operator">:</span>jar
产生应用需要的任何额外的源代码：mvn generate<span class="token operator">-</span>sources
编译源代码： mvn compile
编译测试代码：mvn test<span class="token operator">-</span>compile
运行测试：mvn test
运行检查：mvn verify
清理maven项目：mvn clean  该操作会清空当前目录的target文件夹
生成eclipse项目：mvn eclipse<span class="token operator">:</span>eclipse
清理eclipse配置：mvn eclipse<span class="token operator">:</span>clean
生成idea项目：mvn idea<span class="token operator">:</span>idea
安装项目到本地仓库：mvn install
发布项目到远程仓库：mvn<span class="token operator">:</span>deploy
在集成测试可以运行的环境中处理和发布包：mvn integration<span class="token operator">-</span>test
显示maven依赖树：mvn dependency<span class="token operator">:</span>tree
显示maven依赖列表：mvn dependency<span class="token operator">:</span>list
下载依赖包的源码：mvn dependency<span class="token operator">:</span>sources
安装本地jar到本地仓库：mvn install<span class="token operator">:</span>install<span class="token operator">-</span>file <span class="token operator">-</span><span class="token class-name">DgroupId</span><span class="token operator">=</span>packageName <span class="token operator">-</span><span class="token class-name">DartifactId</span><span class="token operator">=</span>projectName <span class="token operator">-</span><span class="token class-name">Dversion</span><span class="token operator">=</span>version <span class="token operator">-</span><span class="token class-name">Dpackaging</span><span class="token operator">=</span>jar <span class="token operator">-</span><span class="token class-name">Dfile</span><span class="token operator">=</span>path
    <span class="token constant">WEB</span>
启动tomcat：mvn tomcat<span class="token operator">:</span>run
启动jetty：mvn jetty<span class="token operator">:</span>run
运行打包部署：mvn tomcat<span class="token operator">:</span>deploy
撤销部署：mvn tomcat<span class="token operator">:</span>undeploy
启动web应用：mvn tomcat<span class="token operator">:</span>start
停止web应用：mvn tomcat<span class="token operator">:</span>stop
重新部署：mvn tomcat<span class="token operator">:</span>redeploy
部署展开的war文件：mvn war<span class="token operator">:</span>exploded tomcat<span class="token operator">:</span>exploded
    maven 命令的格式为 mvn <span class="token punctuation">[</span>plugin<span class="token operator">-</span>name<span class="token punctuation">]</span><span class="token operator">:</span><span class="token punctuation">[</span>goal<span class="token operator">-</span>name<span class="token punctuation">]</span>，可以接受的参数如下。
<span class="token operator">-</span><span class="token class-name">D</span> 指定参数，如 <span class="token operator">-</span><span class="token class-name">Dmaven</span><span class="token punctuation">.</span>test<span class="token punctuation">.</span>skip<span class="token operator">=</span><span class="token boolean">true</span> 跳过单元测试；
<span class="token operator">-</span><span class="token class-name">P</span> 指定 <span class="token class-name">Profile</span> 配置，可以用于区分环境；
<span class="token operator">-</span>e 显示maven运行出错的信息；
<span class="token operator">-</span>o 离线执行命令<span class="token punctuation">,</span>即不去远程仓库更新包；
<span class="token operator">-</span><span class="token class-name">X</span> 显示maven允许的debug信息；
<span class="token operator">-</span><span class="token class-name">U</span> 强制去远程更新snapshot的插件或依赖，默认每天只更新一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1、maven的简介" tabindex="-1"><a class="header-anchor" href="#_1、maven的简介" aria-hidden="true">#</a> 1、Maven的简介</h2><h3 id="_1-1-构建-build" tabindex="-1"><a class="header-anchor" href="#_1-1-构建-build" aria-hidden="true">#</a> 1.1 构建（build）</h3><p>除了编写源代码，一部分时间花在了编译、运行单元测试、生成文档、打包和部署等烦琐且不起眼的工作上，这就是构建。于是有人使用使用软件只需简单的一条命令，就能自动完成。</p><h3 id="_1-2-maven的用途" tabindex="-1"><a class="header-anchor" href="#_1-2-maven的用途" aria-hidden="true">#</a> 1.2 Maven的用途</h3><p>自动化构建过程、清理、编译、测试到生成报告，再到打包和部署。 依赖增加、版本不一致、版本冲突、依赖臃肿等问题：Maven通过一个坐标系统准确地定位每一个构件（artifact），也就是通过一组坐标Maven能够找到任何一个Java类库（如jar文件）。类似于经纬度定位。</p><h2 id="_2、maven的安装和配置" tabindex="-1"><a class="header-anchor" href="#_2、maven的安装和配置" aria-hidden="true">#</a> 2、Maven的安装和配置</h2><h3 id="_2-1-maven怎么升级" tabindex="-1"><a class="header-anchor" href="#_2-1-maven怎么升级" aria-hidden="true">#</a> 2.1 Maven怎么升级：</h3><p>解压新的maven到一个目录，只需更新系统变量指向它。</p><h3 id="_2-2-maven目录介绍" tabindex="-1"><a class="header-anchor" href="#_2-2-maven目录介绍" aria-hidden="true">#</a> 2.2 Maven目录介绍：</h3><p>（bin boot conf lib LINCENSE. txt NOTICE. txt README.txt）</p><ol><li><p>Bin目录：mvn运行脚本（mvn是unix的shell脚本，mvn.bat是windows版），这些脚本是用来配置java命令的。</p></li><li><p>Boot目录： 里只有一个jar包，plexus-classworlds-2.5.2.jar是maven加载类库。</p></li><li><p>Conf目录：settings.xml可以在机器上定义全局的行为。</p></li><li><p>Lib类库</p></li></ol><p>默认情况下：</p><p>大多数人需要把M2_HOME/conf/settings.xml复制到~/.m2/settings.xml</p><h3 id="_2-3-设置http代理" tabindex="-1"><a class="header-anchor" href="#_2-3-设置http代理" aria-hidden="true">#</a> 2.3 设置HTTP代理</h3><p>有些公司为了安全无法访问公共的Maven中央仓库，需要设置代理，必须保证代理服务器的通畅。</p><h3 id="_2-4-设置maven-opts环境变量" tabindex="-1"><a class="header-anchor" href="#_2-4-设置maven-opts环境变量" aria-hidden="true">#</a> 2.4 设置MAVEN_OPTS环境变量</h3><p>目的是让maven构建是速度增加。由于Mvn命令实际是使用java命令，默认无法满足maven运行的需要，容易产生java.lang.OutOfMemeoryError，需要设置系统环境变量MAVEN_OPTS的值为-Xms128m -Xmx512m。</p><h3 id="_2-5-参数设置" tabindex="-1"><a class="header-anchor" href="#_2-5-参数设置" aria-hidden="true">#</a> 2.5 参数设置：</h3><pre><code>  Linux：在~/.bash_profile文件中添加
</code></pre><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>export <span class="token constant">MAVEN_OPTS</span><span class="token operator">=</span><span class="token string">&quot;-Xms512m -Xmx1024m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（此设置是为了maven执行java时分配给大点的内存，解决容易引起maven导包或插件时卡顿） Windows：如下图 <img src="`+i+`"></p><h3 id="_2-6-用户配置" tabindex="-1"><a class="header-anchor" href="#_2-6-用户配置" aria-hidden="true">#</a> 2.6 用户配置：</h3><p>把MAVEN_HOME/conf/seettings.xml cp 到 ~/.m2/下，在.m2下的settings.xml中所作的配置就是用户级别的配置，而直接编辑MAVEN_HOME/conf/seettings.xml所作的配置是全局的配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>上传到私服的流程：
  a<span class="token punctuation">.</span>  加入打包插件
  b<span class="token punctuation">.</span> mvn clean <span class="token keyword">package</span> <span class="token comment">// 加上clean 会清空target，然后再生成新的包。。。</span>
  c<span class="token punctuation">.</span>mvn source<span class="token operator">:</span>jar  <span class="token comment">// 生成源码包</span>
  d<span class="token punctuation">.</span>mvn deploy <span class="token comment">// 上传私服，别忘升级版本哦~~~</span>
<span class="token number">2.</span>idea和eclipse导入时不同： 
idea是project下的<span class="token keyword">module</span>  <span class="token namespace">eclipse</span>是workspace下的project
  idea导入maven项目  https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>blog<span class="token punctuation">.</span>csdn<span class="token punctuation">.</span>net<span class="token operator">/</span>weixin_37909363<span class="token operator">/</span>article<span class="token operator">/</span>details<span class="token operator">/</span><span class="token number">80915509</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、使用入门" tabindex="-1"><a class="header-anchor" href="#_3、使用入门" aria-hidden="true">#</a> 3、使用入门</h2><h3 id="_3-1-编写pom-xml" tabindex="-1"><a class="header-anchor" href="#_3-1-编写pom-xml" aria-hidden="true">#</a> 3.1 编写pom.xml</h3><p>Maven的核心是pom.xml</p><figure><img src="`+p+'" alt="1618244002479" tabindex="0" loading="lazy"><figcaption>1618244002479</figcaption></figure><p>第三方工具可以快速构建pom.xml的头</p><p>Project是所有的pom.xml的根元素，其中第一个子元素modelVersion指定了当前POM模型的版本，对于Maven2和Maven3来说，它只能是4.0.0。</p><p>最重要的是groupId、artifactId和version三行。这三行元素定义了一个项目的基本坐标，在Maven的世界，任何的jar、pom或者war都是以基于这些基本的坐标进行区分的。</p><p>GroupId定义了项目属于哪个组，这个组往往和项目所在的组织或公司存在关联。</p><p>ArtifactId定义了当前Maven项目在组中唯一的ID，子模块</p><p>Version指定了版本</p><h3 id="_3-2编写主代码-项目打包过程" tabindex="-1"><a class="header-anchor" href="#_3-2编写主代码-项目打包过程" aria-hidden="true">#</a> 3.2编写主代码，项目打包过程</h3><p>此处介绍mvn clean complie、mvn clean test、mvn clean package、mvn clean install</p><h4 id="_3-2-1使用maven编译项目" tabindex="-1"><a class="header-anchor" href="#_3-2-1使用maven编译项目" aria-hidden="true">#</a> 3.2.1使用maven编译项目</h4><p>当我们编写一个main调用sayHello()打印helloworld字符串时。</p><p>该代码的（com.sy.sa.myapp.helloworld）与之前的POM中定义的groupId和artifactId相吻合。一般来说，项目中Java类的包都应该基于项目的group和artifactId，方便搜索。</p><p>当编码完毕，使用Maven进行编译，</p><p>在项目根目录下运行命令mvn clean compile，</p><p>mvn clean compile运行步骤：</p><figure><img src="'+r+'" alt="1618244073306" tabindex="0" loading="lazy"><figcaption>1618244073306</figcaption></figure><p>（1）Clean告诉Maven清理输出目录target/，compile告诉Maven编译项目主代码，从输出中看到Maven首先执行了clean：Clean任务，删除target/目录；默认情况下，Maven构建的所有输出都在target/目录中；</p><p>（2）接着执行resources：resources任务（未定义项目资源，暂且略过）；</p><p>（3）最后执行compiler：compile任务，将项目主代码编译至targert/classes目录</p><h4 id="_3-2-2-使用maven编译测试类" tabindex="-1"><a class="header-anchor" href="#_3-2-2-使用maven编译测试类" aria-hidden="true">#</a> 3.2.2 使用maven编译测试类</h4><p>编写完测试用例运行命令mvn clean test</p><p>需要maven-compiler-plugin插件</p><figure><img src="'+t+'" alt="1618244110010" tabindex="0" loading="lazy"><figcaption>1618244110010</figcaption></figure><p>mvn clean test运行的步骤中会提示测试报告，显示一共运行了多少测试，失败了多少，出错了多少，跳过了多少</p><figure><img src="'+o+'" alt="1618244137853" tabindex="0" loading="lazy"><figcaption>1618244137853</figcaption></figure><h4 id="_3-2-3-使用maven将项目打包和运行" tabindex="-1"><a class="header-anchor" href="#_3-2-3-使用maven将项目打包和运行" aria-hidden="true">#</a> 3.2.3 使用maven将项目打包和运行</h4><p>mvn clean package进行打包，可以看到target下生成jar，</p><p>它是根据artifact-version.jar规则进行命名的，还可以使用finalName来自定义该文件的名称。</p><figure><img src="'+c+`" alt="1618244166891" tabindex="0" loading="lazy"><figcaption>1618244166891</figcaption></figure><h4 id="_3-2-4-使用maven运行带main方法的类" tabindex="-1"><a class="header-anchor" href="#_3-2-4-使用maven运行带main方法的类" aria-hidden="true">#</a> 3.2.4 使用maven运行带main方法的类</h4><p>目前我们打成的jar不能识别main方法，需要指定main方法的位置。使用这个插件，来制定main方法的位置</p><pre><code>      maven-shade-plug 
</code></pre><figure><img src="`+l+'" alt="1618244193984" tabindex="0" loading="lazy"><figcaption>1618244193984</figcaption></figure><h4 id="_3-2-5-将项目打包放到本地maven仓库" tabindex="-1"><a class="header-anchor" href="#_3-2-5-将项目打包放到本地maven仓库" aria-hidden="true">#</a> 3.2.5 将项目打包放到本地maven仓库</h4><p>mvn clean install将此jar包放到maven指定的仓库，该仓库的地址是setting.xml的本地仓库的地址</p><figure><img src="'+d+'" alt="1618244251013" tabindex="0" loading="lazy"><figcaption>1618244251013</figcaption></figure><h2 id="_4、坐标和依赖" tabindex="-1"><a class="header-anchor" href="#_4、坐标和依赖" aria-hidden="true">#</a> 4、坐标和依赖</h2><h3 id="_4-1-坐标详解" tabindex="-1"><a class="header-anchor" href="#_4-1-坐标详解" aria-hidden="true">#</a> 4.1 坐标详解</h3><p>Maven坐标为各种构件引入了秩序，任何一个构件都必须明确定义自己的坐标。它们是groupId、artifactId、version、packaging、classifier</p><figure><img src="'+m+`" alt="1618244289269" tabindex="0" loading="lazy"><figcaption>1618244289269</figcaption></figure><h4 id="_4-1-1-groupid定义到项目" tabindex="-1"><a class="header-anchor" href="#_4-1-1-groupid定义到项目" aria-hidden="true">#</a> 4.1.1 groupId定义到项目</h4><p>与java包名类似，通常是反向的域名。GroupId为org.sonatype.nexus，（org.sonatype是非营利组织sonatype、nexus是实际项目）。该groupId与域名nexus. Sonatype.org反向对应</p><h4 id="_4-1-2-artifactid定义到项目其中的一个模块" tabindex="-1"><a class="header-anchor" href="#_4-1-2-artifactid定义到项目其中的一个模块" aria-hidden="true">#</a> 4.1.2 artifactId定义到项目其中的一个模块</h4><pre><code> 为了方便区分，便于寻找实际构件，用nexus作为前缀
</code></pre><h4 id="_4-1-3-version为版本" tabindex="-1"><a class="header-anchor" href="#_4-1-3-version为版本" aria-hidden="true">#</a> 4.1.3 version为版本</h4><h4 id="_4-1-4-packaging为该项目的打包方式-默认jar-可选" tabindex="-1"><a class="header-anchor" href="#_4-1-4-packaging为该项目的打包方式-默认jar-可选" aria-hidden="true">#</a> 4.1.4 packaging为该项目的打包方式，默认jar（可选）</h4><h4 id="_4-1-5-classifier为-可选-不能直接定义-由附加插件帮助生成" tabindex="-1"><a class="header-anchor" href="#_4-1-5-classifier为-可选-不能直接定义-由附加插件帮助生成" aria-hidden="true">#</a> 4.1.5 classifier为（可选，不能直接定义，由附加插件帮助生成）</h4><h2 id="_5、依赖" tabindex="-1"><a class="header-anchor" href="#_5、依赖" aria-hidden="true">#</a> 5、依赖</h2><h3 id="_5-1-依赖范围" tabindex="-1"><a class="header-anchor" href="#_5-1-依赖范围" aria-hidden="true">#</a> 5.1 依赖范围</h3><p>例：Junit依赖的测试范围test， 测试范围用元素scope表示</p><p>Maven在编译项目主代码时候使用一套classpath</p><p>在编译和执行测试的时候回使用另一套classpath</p><p>依赖范围就是用来控制依赖于这三种classpath（编译classpath、测试classpath、运行classpath），Maven有以下几种依赖范围：</p><p>Compile：编译依赖范围，三种classpath都有效(默认)</p><p>Test：测试依赖范围</p><p>Provided：已提供依赖范围（编译和测试）</p><p>Runtime：运行时依赖规范</p><p>System：系统依赖范围（编译和测试，必须显示的依赖文件的路径）</p><figure><img src="`+v+'" alt="1618244361109" tabindex="0" loading="lazy"><figcaption>1618244361109</figcaption></figure><h3 id="_5-2-传递性依赖" tabindex="-1"><a class="header-anchor" href="#_5-2-传递性依赖" aria-hidden="true">#</a> 5.2 传递性依赖</h3><p>有了传递依赖机制，Maven会直接依赖POM，将那些必要的简介依赖，以传递性依赖的形式引入到当前的项目中。</p><p>A依赖B、B依赖C：A对于B是第一直接依赖，B对于C是第二直接依赖，A对于C是传递性依赖。传递依赖同样有生命周期</p><figure><img src="'+h+`" alt="1618244387386" tabindex="0" loading="lazy"><figcaption>1618244387386</figcaption></figure><h3 id="_5-3-排除依赖" tabindex="-1"><a class="header-anchor" href="#_5-3-排除依赖" aria-hidden="true">#</a> 5.3 排除依赖</h3><h4 id="_5-3-1引入相同版本的依赖" tabindex="-1"><a class="header-anchor" href="#_5-3-1引入相同版本的依赖" aria-hidden="true">#</a> 5.3.1引入相同版本的依赖</h4><p>像framework定义version</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token generics"><span class="token punctuation">&lt;</span>properties<span class="token punctuation">&gt;</span></span>
	 <span class="token generics"><span class="token punctuation">&lt;</span>springframework<span class="token punctuation">.</span>version<span class="token punctuation">&gt;</span></span><span class="token number">5.2</span><span class="token number">.2</span><span class="token operator">&lt;</span><span class="token operator">/</span>springframework<span class="token punctuation">.</span>version<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>properties<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-3-2-依赖优化" tabindex="-1"><a class="header-anchor" href="#_5-3-2-依赖优化" aria-hidden="true">#</a> 5.3.2 依赖优化</h4><p>mvn dependency:list 查看当前项目已解析的依赖</p><p>mvn dependency:tree 查看当前项目的依赖树</p><p>mvn dependency:analyze 帮助分析当前项目的依赖</p><h2 id="_6、仓库" tabindex="-1"><a class="header-anchor" href="#_6、仓库" aria-hidden="true">#</a> 6、仓库</h2><h3 id="_6-1概念" tabindex="-1"><a class="header-anchor" href="#_6-1概念" aria-hidden="true">#</a> 6.1概念</h3><p>任何一个依赖，插件或者项目构建的输出，都可以称为构件</p><h3 id="_6-2-仓库的布局" tabindex="-1"><a class="header-anchor" href="#_6-2-仓库的布局" aria-hidden="true">#</a> 6.2 仓库的布局</h3><p>仓库布局的源码，是基于简单的文件系统</p><h3 id="_6-3-仓库的分类" tabindex="-1"><a class="header-anchor" href="#_6-3-仓库的分类" aria-hidden="true">#</a> 6.3 仓库的分类</h3><p>仓库的配置，中央仓库、远程仓库</p><p>分类：</p><figure><img src="`+u+'" alt="1618244497271" tabindex="0" loading="lazy"><figcaption>1618244497271</figcaption></figure><h3 id="_6-4-仓库的配置" tabindex="-1"><a class="header-anchor" href="#_6-4-仓库的配置" aria-hidden="true">#</a> 6.4 仓库的配置</h3><h4 id="_6-4-1设置仓库" tabindex="-1"><a class="header-anchor" href="#_6-4-1设置仓库" aria-hidden="true">#</a> 6.4.1设置仓库</h4><p>（1) 在repositories元素下，可以使用repository子元素声明一个或者多个远程仓库。</p><figure><img src="'+g+'" alt="1618244522945" tabindex="0" loading="lazy"><figcaption>1618244522945</figcaption></figure><p>（2）配置maven 更新频率和检查文件策略</p><figure><img src="'+b+'" alt="1618244544994" tabindex="0" loading="lazy"><figcaption>1618244544994</figcaption></figure><p>（3）Maven的认证</p><figure><img src="'+f+'" alt="1618244566899" tabindex="0" loading="lazy"><figcaption>1618244566899</figcaption></figure><h4 id="_6-4-2-上传构件到私有仓库" tabindex="-1"><a class="header-anchor" href="#_6-4-2-上传构件到私有仓库" aria-hidden="true">#</a> 6.4.2 上传构件到私有仓库</h4><p>（1）首先配置好distributionManagement配置</p><p>distributionManagement是项目分发信息，在执行mvn deploy后表示要发布的位置。有了这些信息就可以把网站部署到远程服务器或者把构件部署到远程仓库。</p><figure><img src="'+k+'" alt="1618244592782" tabindex="0" loading="lazy"><figcaption>1618244592782</figcaption></figure><p>（2）配置成功后，可以用mvn clean deploy Maven就会将项目构建输出的构建部署到配置对应的远程仓库。如果项目当前是快照版本，则部署到快照仓库地址，否则就部署到发布版本仓库地址。</p><h4 id="_6-4-3-maven版本号机制" tabindex="-1"><a class="header-anchor" href="#_6-4-3-maven版本号机制" aria-hidden="true">#</a> 6.4.3 Maven版本号机制</h4><figure><img src="'+_+'" alt="1618244623527" tabindex="0" loading="lazy"><figcaption>1618244623527</figcaption></figure><p>版本号(version number)是版本的标识号。</p><p>1.版本命名规范</p><p>软件版本号有四部分组成，第一部分为主版本号，第二部分为次版本号，第三部分为修订版本号，第四部分为日期版本号</p><p>2.软件版本阶段说明</p><p>3.版本号修改规则</p><p>（1）主版本号：当整体框架结构发生变化时，此版本号增加。此版本号由项目决定是否修改。</p><p>（2）次版本号：相对于主版本号而言，次版本号的升级对应的只是局部的变动，当项目在原有的基础上增加了部分功能时，主版本号不变，子版本号加 1，修正版本号复位为 0。</p><p>（3）修订版本号：当项目在进行了局部修改或 bug 修正时，主版本号和子版本号都不变，修正版本号加 1。</p><p>（4）日期版本号：发版当天的日期，需要包括年份。如：20160617</p>',134),j=[y];function M(w,I){return n(),e("div",null,j)}const N=a(x,[["render",M],["__file","maven梳理.html.vue"]]);export{N as default};
